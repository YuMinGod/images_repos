import React, { useState } from 'react';
import './Component.css';

function SimpleCharMove() {
    const [showCodes, setShowCodes] = useState(false);

    const toggleCodes = () => {
    setShowCodes(!showCodes);
    };

    const codeText = `
    import tkinter

    key = ""
    def key_down(e):
        global key
        key = e.keysym
    def key_up(e):
        global key 
        key = ""

    cx = 400
    cy = 300

    def main_proc():
        global cx, cy
        if key == "Up":
            cy = cy - 20
        elif key == "Down":
            cy = cy + 20
        elif key == "Left":
            cx = cx - 20
        elif key == "Right":
            cx = cx + 20
        canvas.coords("Bazzi", cx, cy)
        root.after(10, main_proc)

    root = tkinter.Tk()
    root.title("Test")
    root.bind("<KeyPress>", key_down)
    root.bind("<KeyRelease>", key_up)
    canvas = tkinter.Canvas(width=800, height=600, bg="skyblue")
    canvas.pack()
    img = tkinter.PhotoImage(file="bazzi.png")
    canvas.create_image(cx, cy, image=img, tag="Bazzi")
    main_proc()
    root.mainloop()
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

        <h1>simple_char_move_py</h1><hr></hr>
        <img src='./Bazzi.png' alt="" ></img>
        <br></br><br></br>
        It's a simple program where you can move pictures with the arrow keys.
        <br></br><br></br>
        <hr></hr>
        <br></br><br></br><br></br>
        <h1>Program Execution Screen</h1>
        <img src='./Bazzi.gif' alt="" ></img>
        

        
    </div>
  );
}

export default SimpleCharMove;