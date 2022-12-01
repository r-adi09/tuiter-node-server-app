import * as tuitsDao from './tuits-dao.js'


const findAllTuits = async (req, res) => {
    const tuits = await tuitsDao.findTuits()
    res.json(tuits);
}

const createTuit = async (req, res) => {
    const newTuit = req.body;
    //newTuit._id = (new Date()).getTime()+'';
    newTuit.likes = 0;
    newTuit.dislikes = 0;
    newTuit.liked = false;
    //tuits.push(newTuit);
    const insertedTuit = await tuitsDao
        .createTuit(newTuit);
    console.log(insertedTuit);
    res.json(insertedTuit);
}
const updateTuit = async (req, res) => {
    const tuitdIdToUpdate = req.params.tid;
    const updates = req.body;
    //tuits = tuits.map(t => t._id === tuitdIdToUpdate ? updatedTuit : t);
    //res.sendStatus(200);
    const status = await tuitsDao
        .updateTuit(tuitdIdToUpdate,
            updates);
    res.json(status);
}

const deleteTuit = async (req, res) => {
    console.log(req.params.tid)
    const tuitdIdToDelete = req.params.tid;
    //tuits = tuits.filter(t => t._id !== tuitdIdToDelete);
    const status = await tuitsDao
        .deleteTuit(tuitdIdToDelete);
    //res.sendStatus(200);
    res.json(status);
}


export default (app) => {
    app.post('/api/tuits', createTuit);
    app.get('/api/tuits', findAllTuits);
    app.put('/api/tuits/:tid', updateTuit);
    app.delete('/api/tuits/:tid', deleteTuit);
}

//added fixes