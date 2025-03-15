import mongoose from 'mongoose';
import { createSubject,getAllSubjects,getSubjectById,getSubjectAlumniByName,getSubjectAlumniById,insertAlumniToSubjectById,updateSubject,deleteSubject } from '../subjects/subject_service.js';

import { Request, Response } from 'express';

export const createSubjectHandler = async (req: Request, res: Response) => {
    try {
        const { alumni, ...subjectData } = req.body;
        console.log(alumni);
        const data = await createSubject(subjectData, alumni);
        res.json(data);
                
    } catch (error:any) {
        res.status(500).json({ message: error.message });
    }
};

export const getAllSubjectsHandler = async (req: Request, res: Response) => {
    try {
        const data = await getAllSubjects();
        res.json(data);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};
export const getSubjectByIdHandler = async (req: Request, res: Response) => {
    try {
        const data = await getSubjectById(req.params.id);
        res.json(data);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

export const getSubjectAlumniByIdHandler = async (req: Request, res: Response) => {
    try {
        const data = await getSubjectAlumniById(req.params.id);
        res.json(data);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

export const getSubjectAlumniByNameHandler = async (req: Request, res: Response) => {
    try {
        const data = await getSubjectAlumniByName(req.params.name);
        res.json(data);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

export const insertAlumniToSubjectByIdHandler = async (req: Request, res: Response) => {
    try {
        const data = await insertAlumniToSubjectById(req.params.idSubject, req.params.idAlumni);
        res.json(data);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

export const updateSubjectHandler = async (req: Request, res: Response) => {
    try {
        const data = await updateSubject(req.params.id, req.body);
        res.json(data);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};
export const deleteSubjectHandler = async (req: Request, res: Response) => {
    try {
        const data = await deleteSubject(req.params.id);
        res.json(data);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};
