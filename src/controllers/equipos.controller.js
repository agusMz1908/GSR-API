import Equipo from "../models/Equipo"

export const createEquipo = async (req, res) => {

    const {serialNumber, partNumber, modelo, estado, propietario, ubicacion} = req.body
    
    const newEquipo = new Equipo({
        serialNumber,
        partNumber,
        modelo,
        estado,
        propietario,
        ubicacion
    })

    const equipoSaved = await newEquipo.save();
    res.status(201).json(equipoSaved);
}

export const getEquipos = async (req, res) => {
    const equipos = await Equipo.find();
    res.json(equipos);
}

export const getEquipoById = async (req, res) => {
    const equipo = await Equipo.findById(req.params.equipoId);
    res.status(200).json(equipo);
}

export const updateEquipoById = async (req, res) => {
    const updatedEquipo = await Equipo.findByIdAndUpdate(req.params.equipoId, req.body, {
        new: true
    })

    res.status(200).json(updatedEquipo);
}

export const deleteEquipoById = async (req, res) => {
    const {equipoId} = req.params
    await Equipo.findByIdAndDelete(equipoId);
    res.status(204).json();
}