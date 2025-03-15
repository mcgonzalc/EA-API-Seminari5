import Subject, { ISubject } from './subject_models.js';
import User from '../users/user_models.js';
import { getUserById } from '../users/user_service.js';
import mongoose from 'mongoose';
import { error } from 'console';

export const createSubject = async (SubjectData: Partial<ISubject>, arrayIDUsers: string[]) => {    
    
    if(arrayIDUsers.length !== 0){
        try{
            const allIDexist = arrayIDUsers.map(async (idAlumni) => {
                await getUserById(idAlumni); //s'utilitza el servei de users
            });
            await Promise.all(allIDexist);
        }catch(error:any){
            throw new Error(`El ID de algun alumno no existe, error: ${error}`);
        }

        const subject = new Subject(SubjectData);
        const result = await subject.save();
        
        const insertPromises = arrayIDUsers.map(async (element) => {
            const resu = await Subject.findByIdAndUpdate(result._id.toString(),{ $push: { alumni: element } },{ new: true }); 
        });

        await Promise.all(insertPromises)
        const SubjectCreado = await getSubjectById(result._id.toString());
        return SubjectCreado;
    }else{
        const subject = new Subject(SubjectData);
        const result = await subject.save();
        return result;
    }   
    
};

export const getAllSubjects = async () => {
    return await Subject.find();
};

export const getSubjectById = async (id: string) => {
    return await Subject.findById(id);
};

export const getSubjectAlumniByName = async (nom: string) => {
    const SubjectResult = await Subject.findOne({ name:nom }).populate('alumni');
    return SubjectResult?.alumni;
};

export const getSubjectAlumniById = async (id: string) => {
    const SubjectResultado = await Subject.findById(id).populate('alumni');
    return SubjectResultado?.alumni;
};

export const insertAlumniToSubjectById = async (idSubject: string, idAlumni: string) => {
    try{
        await getUserById(idAlumni); 
    }catch(error:any){
        throw new Error(`El ID del alumno no existe, error: ${error}`);
    }
    return await Subject.findByIdAndUpdate(
        idSubject,{ $push: { alumni: idAlumni } },{ new: true } // Torna el document actualitzat
    );
};

export const updateSubject = async (id: string, updateData: Partial<ISubject>) => {
    return await Subject.updateOne({ _id: id }, { $set: updateData });
};

export const deleteSubject = async (id: string) => {
    return await Subject.deleteOne({ _id: id });
};

