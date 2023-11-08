import React, { useState } from 'react';
import './Component.css';

  
function DiscordScoreBot() {
    const [showCodes, setShowCodes] = useState(false);

    const toggleCodes = () => {
    setShowCodes(!showCodes);
    };

    const codeText = `
    import discord
    from discord.ext import tasks
    from itertools import cycle
    import os

    TOKEN = os.environ['TOKEN']

    status = cycle(["[/help] 명령어를 입력하여 사용 방법을 확인하세요!"])

    intents = discord.Intents.default()
    intents.message_content = True

    client = discord.Client(intents=intents)

    game_started = False
    max_players = 0
    num_players = 0
    players_scores = {}
    current_set = 0

    @client.event
    async def on_ready():
        print('Logged in as {0.user}'.format(client))

        change_status.start()

    @tasks.loop(seconds=5)    # 상태 메세지 출력
    async def change_status():
        await client.change_presence(activity=discord.Game(next(status)))

    # /시작 command
    @client.event
    async def on_message(message):
        global game_started, max_players, num_players, players_scores, current_set, player
        player = message.author
        if message.content.startswith('/시작'):
            if game_started:
                embed = discord.Embed(title="[봇] 점수계산기", color=0x00aaaa)
                embed.add_field(name="오류 발생", value="이미 게임이 시작되었습니다!", inline=False)
                await message.channel.send(embed=embed)
            else:
                embed = discord.Embed(title="[봇] 점수계산기", color=0x00aaaa)
                embed.add_field(name="게임을 시작합니다.", value="참가자의 수를 입력하세요. (1~10)", inline=False)
                await message.channel.send(embed=embed)
                def check(m):
                    return m.author == message.author and m.channel == message.channel and m.content.isdigit()
                msg = await client.wait_for('message', check=check)
                max_players = int(msg.content)
                if max_players < 1 or max_players > 10:
                    embed = discord.Embed(title="[봇] 점수계산기", color=0x00aaaa)
                    embed.add_field(name="오류 발생", value="참가자의 수는 (1~10)명까지 입력할 수 있습니다.", inline=False)
                    await message.channel.send(embed=embed)
                else:
                    num_players = 0
                    players_scores = {}
                    game_started = True
                    embed = discord.Embed(title="[봇] 점수계산기", color=0x00aaaa)
                    embed.add_field(name="참가자 모집", value="참가자의 수는 {}명입니다. [/참가] 명령어를 사용하여 게임에 참가하세요.".format(max_players), inline=False)
                    await message.channel.send(embed=embed)

        # /참가 command
        elif message.content.startswith('/참가'):
            if not game_started:
                embed = discord.Embed(title="[봇] 점수계산기", color=0x00aaaa)
                embed.add_field(name="오류 발생", value="게임이 아직 시작되지 않았습니다! [/시작] 명령어를 사용해서 게임을 시작하세요!", inline=False)
                await message.channel.send(embed=embed)
            elif num_players >= max_players:
                embed = discord.Embed(title="[봇] 점수계산기", color=0x00aaaa)
                embed.add_field(name="오류 발생", value="이미 최대 인원({}명)이 모집되었습니다.".format(max_players), inline=False)
                await message.channel.send(embed=embed)
            else:
                num_players += 1
                players_scores[message.author] = 0
                embed = discord.Embed(title="[봇] 점수계산기", color=0x00aaaa)
                embed.add_field(name="참가 완료", value="{}님이 참가되었습니다. ({} / {})".format(player.display_name, num_players, max_players), inline=False)
                await message.channel.send(embed=embed)

        # /완료 command
        elif message.content.startswith('/완료'):
            if not game_started:
                embed = discord.Embed(title="[봇] 점수계산기", color=0x00aaaa)
                embed.add_field(name="오류 발생", value="게임이 아직 시작되지 않았습니다! [/시작] 명령어를 사용해서 게임을 시작하세요!", inline=False)
                await message.channel.send(embed=embed)
            elif num_players < max_players:
                embed = discord.Embed(title="[봇] 점수계산기", color=0x00aaaa)
                embed.add_field(name="오류 발생", value="아직 참가자가 부족합니다. ({} / {})".format(num_players, max_players), inline=False)
                await message.channel.send(embed=embed)
            else:
                embed = discord.Embed(title="[봇] 점수계산기", color=0x00aaaa)
                embed.add_field(name="1세트 시작", value="1세트를 시작합니다. 각자 자신의 점수에 추가할 숫자를 입력하세요.", inline=False)
                await message.channel.send(embed=embed)
                for player in players_scores.keys():
                    def check(m):
                        return m.author == player and m.channel == message.channel and m.content.isdigit()
                    msg = await client.wait_for('message', check=check)
                    score = int(msg.content)
                    players_scores[player] += score
                    await message.channel.send('{}님, {}점이 추가되었습니다.'.format(player.display_name, score))

        # /점수 command
        elif message.content.startswith('/점수'):
            if not game_started:
                embed = discord.Embed(title="[봇] 점수계산기", color=0x00aaaa)
                embed.add_field(name="오류 발생", value="게임이 아직 시작되지 않았습니다! [/시작] 명령어를 사용해서 게임을 시작하세요!", inline=False)
                await message.channel.send(embed=embed)
            else:
                for player, score in players_scores.items():
                    embed = discord.Embed(title="[봇] 점수계산기", color=0x00aaaa)
                    embed.add_field(name="점수 입력", value="{} : {}점".format(player.display_name, score), inline=False)
                    await message.channel.send(embed=embed)

        # /계속 command
        elif message.content.startswith('/계속'):
            if not game_started:
                embed = discord.Embed(title="[봇] 점수계산기", color=0x00aaaa)
                embed.add_field(name="오류 발생", value="게임이 아직 시작되지 않았습니다! [/시작] 명령어를 사용해서 게임을 시작하세요!", inline=False)
                await message.channel.send(embed=embed)
            elif num_players < max_players:
                embed = discord.Embed(title="[봇] 점수계산기", color=0x00aaaa)
                embed.add_field(name="오류 발생", value="아직 참가자가 부족합니다. ({} / {})".format(num_players, max_players), inline=False)
                await message.channel.send(embed=embed)
            else:
                global current_set
                current_set += 1
                embed = discord.Embed(title="[봇] 점수계산기", color=0x00aaaa)
                embed.add_field(name="{}세트 시작".format(current_set), value="{}세트를 시작합니다. 각자 자신의 점수에 추가할 숫자를 입력하세요.".format(current_set), inline=False)
                await message.channel.send(embed=embed)
                for player in players_scores.keys():
                    def check(m):
                        return m.author == player and m.channel == message.channel and m.content.isdigit()
                    msg = await client.wait_for('message', check=check)
                    score = int(msg.content)
                    players_scores[player] += score
                    embed = discord.Embed(title="[봇] 점수계산기", color=0x00aaaa)
                    embed.add_field(name="점수 추가", value="{}님, {}점이 추가되었습니다.".format(player.display_name, score), inline=False)
                    await message.channel.send(embed=embed)

        # /종료 command
        elif message.content.startswith('/종료'):
            game_started = False
            max_players = 0
            num_players = 0
            players_scores = {}
            current_set = 0
            embed = discord.Embed(title="[봇] 점수계산기", color=0x00aaaa)
            embed.add_field(name="게임 종료", value="게임이 종료되었습니다! [/시작] 명령어를 사용해서 다시 게임을 시작하세요!", inline=False)
            await message.channel.send(embed=embed)

        # /help command
        elif message.content.startswith('/help'):
            if not game_started:
                embed = discord.Embed(title="봇 사용 방법", color=0x00aaaa)
                embed.add_field(name="[/시작]", value="게임을 시작하여 참가자를 모집합니다.", inline=False)
                embed.add_field(name="[/참가]", value="게임에 참가합니다.", inline=False)
                embed.add_field(name="[/계속]", value="다음 세트를 시작하고 점수를 입력합니다.", inline=False)
                embed.add_field(name="[/점수]", value="모든 플레이어의 점수를 확인합니다.", inline=False)
                embed.add_field(name="[/종료]", value="게임을 종료합니다.", inline=False)
                await message.channel.send(embed=embed)
            else:
                embed = discord.Embed(title="봇 사용 방법", color=0x00aaaa)
                embed.add_field(name="[/시작]", value="게임을 시작하여 참가자를 모집합니다.", inline=False)
                embed.add_field(name="[/참가]", value="게임에 참가합니다.", inline=False)
                embed.add_field(name="[/계속]", value="다음 세트를 시작하고 점수를 입력합니다.", inline=False)
                embed.add_field(name="[/점수]", value="모든 플레이어의 점수를 확인합니다.", inline=False)
                embed.add_field(name="[/종료]", value="모든 플레이어의 점수를 확인합니다.", inline=False)
                await message.channel.send(embed=embed)                            

    client.run(TOKEN)
    `;

  return (
    <div>
        <button class="custom-btn btn-12" onClick={toggleCodes}>
            <span>Click!</span><span>Show All Codes</span></button>
        {showCodes && (
            <div>
            <pre>{codeText}</pre>
            </div>
        )}

        <h1>discord_score_bot_py </h1><hr></hr>
        Discord bot that helps all participants calculate their scores by entering their scores for each set.
        <br></br><br></br><br></br>

        <h1>What are the commands for this bot?</h1><hr></hr><br></br>
        <img src='/scorebot1.png'></img><br></br><br></br>
        Use the [/help] command to check all commands in the bot!
        <br></br><br></br><br></br>

        <h1>(1)How to Use?</h1><hr></hr><br></br>
        <img src='/scorebot2.png'></img><br></br><br></br>
        Use the [/시작] command to start the game. You must enter a number (1-10) of players to participate in the game.
        <br></br><br></br><br></br>

        <h1>(2)How to Use?</h1><hr></hr><br></br>
        <img src='/scorebot3.png'></img><br></br><br></br>
        If you have entered the number of participants, use the [/참가] command to participate in the game.
        <br></br><br></br><br></br>

        <h1>(3)How to Use?</h1><hr></hr><br></br>
        <img src='/scorebot4.png'></img><br></br><br></br>
        Use the [/참가] command to join the game. Unable to exceed the maximum number of previously entered participants.
        <br></br><br></br><br></br>

        <h1>(4)How to Use?</h1><hr></hr><br></br>
        <img src='/scorebot5.png'></img><br></br><br></br>
        Once all participants have been recruited, use the [/계속] command to start the set. For each set, participants must enter their scores.
        <br></br><br></br><br></br>

        <h1>(5)How to Use?</h1><hr></hr><br></br>
        <img src='/scorebot6.png'></img><br></br><br></br>
        If you enter 10, 10 points will be added.
        <br></br><br></br><br></br>

        <h1>(6)How to Use?</h1><hr></hr><br></br>
        <img src='/scorebot7.png'></img><br></br><br></br>
        You can view scores for all players at any time using the [/점수] command.
        <br></br><br></br><br></br>

        <h1>(7)How to Use?</h1><hr></hr><br></br>
        <img src='/scorebot8.png'></img><br></br><br></br>
        You can use the [/종료] command to exit the game. Start the game again using the [/] command!
        <br></br><br></br><br></br>
    </div>
  );
}

export default DiscordScoreBot;