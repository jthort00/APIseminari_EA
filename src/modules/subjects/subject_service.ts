import Subject, { ISubject } from './subject_models.js';

export const createSubject = async (subjectData: ISubject) => {
    const subject = new Subject(subjectData);
    return await subject.save();
};

export const getAllSubjects = async () => {
    return await Subject.find().populate('alumni');
};

export const getSubjectById = async (id: string) => {
    return await Subject.findById(id).populate('alumni');
};

export const updateSubject = async (id: string, updateData: Partial<ISubject>) => {
    return await Subject.updateOne({ _id: id }, { $set: updateData });
};

export const deleteSubject = async (id: string) => {
    return await Subject.deleteOne({ _id: id });
};

export const getUsersBySubjectId = async (id: string) => {
    const subject = await Subject.findById(id).populate('alumni');
    return subject?.alumni || [];
};