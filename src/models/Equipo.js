import {Schema, model} from "mongoose";

const equipoSchema = new Schema({
    serialNumber: String,
    partNumber: String,
    modelo: String,
    estado: String,
    propietatrio: String,
    ubicacion: String,
}, {
    timestamps: true,
    versionKey: false
})

export default model('Equipo', equipoSchema);