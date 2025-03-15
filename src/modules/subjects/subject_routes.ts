import express from 'express';
import {createSubjectHandler,getAllSubjectsHandler,getSubjectByIdHandler,getSubjectAlumniByNameHandler,getSubjectAlumniByIdHandler,updateSubjectHandler,insertAlumniToSubjectByIdHandler,deleteSubjectHandler} from '../subjects/subject_controller.js';

const router = express.Router();

/**
 * @openapi
 * /api/subjects:
 *   post:
 *     summary: Crea un nuevo subject
 *     description: Añade los detalles de un nuevo subject
 *     tags:
 *       - Subjects
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               teacher:
 *                 type: string
 *               class:
 *                 type: string
 *               alumni:
 *                 type: array
 *                 items:
 *                   type: string
 *                   example: "67d45d9bdcbd1edec946f609"
 *     responses:
 *       200:
 *         description: Subject creado exitosamente
 */
router.post('/subjects', createSubjectHandler);

/**
 * @openapi
 * /api/subjects:
 *   get:
 *     summary: Obtiene todos los subjects
 *     description: Retorna una lista de todos los subjects.
 *     tags:
 *       - Subjects
 *     responses:
 *       200:
 *         description: Éxito
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   name:
 *                     type: string
 *                   teacher:
 *                     type: string
 *                   class:
 *                     type: string
 *                   alumni:
 *                     type: array
 *                     items:
 *                       type: string
 *                       example: "67d45d9bdcbd1edec946f609"
 */
router.get('/subjects', getAllSubjectsHandler);

/**
 * @openapi
 * /api/subjects/{id}:
 *   get:
 *     summary: Obtiene un subject por ID
 *     description: Retorna los detalles de un subject específico.
 *     tags:
 *       - Subjects
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Éxito
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 name:
 *                   type: string
 *                 teacher:
 *                   type: string
 *                 class:
 *                   type: string
 *                 alumni:
 *                   type: array
 *                   items:
 *                     type: string
 *       404:
 *         description: Subject no encontrado
 */
router.get('/subjects/:id', getSubjectByIdHandler);

/**
 * @openapi
 * /api/subjects/alumniById/{id}:
 *   get:
 *     summary: Obtiene los alumnos de un subject por ID
 *     description: Retorna los detalles de los alumnos de un subject específico.
 *     tags:
 *       - Subjects
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Éxito
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: string
 *       404:
 *         description: Subject no encontrado
 */
router.get('/subjects/alumniById/:id', getSubjectAlumniByIdHandler);

/**
 * @openapi
 * /api/subjects/alumniByName/{name}:
 *   get:
 *     summary: Obtiene los alumnos de un subject por nombre de subject
 *     description: Retorna los detalles de los alumnos de un subject específico.
 *     tags:
 *       - Subjects
 *     parameters:
 *       - name: name
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Éxito
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: string
 *       404:
 *         description: Subject no encontrado
 */
router.get('/subjects/alumniByName/:name', getSubjectAlumniByNameHandler);

/**
 * @openapi
 * /api/subjects/{idSubject}/{idAlumni}:
 *   put:
 *     summary: Añade un alumno a un subject por ID
 *     description: Añade un alumno a un subject específico.
 *     tags:
 *       - Subjects
 *     parameters:
 *       - name: idSubject
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *       - name: idAlumni
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Alumno añadido exitosamente
 *       404:
 *         description: Subject o alumno no encontrado
 */
router.put('/subjects/:idSubject/:idAlumni', insertAlumniToSubjectByIdHandler);

/**
 * @openapi
 * /api/subjects/{id}:
 *   put:
 *     summary: Actualiza un subject por ID
 *     description: Modifica los detalles de un subject específico.
 *     tags:
 *       - Subjects
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               teacher:
 *                 type: string
 *               class:
 *                 type: string
 *               alumni:
 *                 type: array
 *                 items:
 *                   type: string
 *     responses:
 *       200:
 *         description: Subject actualizado exitosamente
 *       404:
 *         description: Subject no encontrado
 */
router.put('/subjects/:id', updateSubjectHandler);

/**
 * @openapi
 * /api/subjects/{id}:
 *   delete:
 *     summary: Elimina un subject por ID
 *     description: Elimina un subject específico de la base de datos.
 *     tags:
 *       - Subjects
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Subject eliminado exitosamente
 *       404:
 *         description: Subject no encontrado
 */
router.delete('/subjects/:id', deleteSubjectHandler);

export default router;