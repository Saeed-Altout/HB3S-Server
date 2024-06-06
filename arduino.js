const { SerialPort } = require("serialport");
const { ReadlineParser } = require("@serialport/parser-readline");

const arduino = new SerialPort({
    path: process.env.SERIALPORT_PATH,
    baudRate: Number(process.env.SERIALPORT_BAUD_RATE),
    autoOpen: false,
});

const parser = arduino.pipe(new ReadlineParser({ delimiter: "\r\n" }));

arduino.on("open", () => {
    console.log("Serial port opened");

    parser.on("data", async (data) => {
        console.log(data);
    });

    arduino.on("error", (err) => {
        console.log("Error: ", err.message);
    });
});

arduino.open((err) => {
    if (err) {
        return console.log("Error opening port: ", err.message);
    }
});


module.exports = {
    arduino,
    parser
}