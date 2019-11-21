const express = require('express')
const eventController = express.Router();
const token = "xoxp-336669666742-335747632355-832198559011-10d5e3a5ae8296fcad7800b5b9eb20d8";

eventController.get('/', async (req, res) => {
    res.status(200).json({ message: 'OK' })
});

/**
 * Receiveing Events
 */
eventController.post('/', async (req, res) => { 
    
    
    
        if(req.body.type == 'url_verification' && req.body.challenge) {
            res.status(200).send(req.body.challenge);
        } else {
            res.status(200).json({ message: "OK" });
        }
    } catch(err) {
        res.status(500).json({ message: "Err" });
    }
})

module.exports = eventController;