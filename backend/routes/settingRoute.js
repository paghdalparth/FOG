const express = require('express');
const { getSettings, createSetting, updateSetting, deleteSetting } = require('../controller/settingController');
const router = express.Router();

router.get('/get-data', getSettings)
router.post('/add-data', createSetting)
router.put('/update/:id', updateSetting)
router.delete('/delete/:id', deleteSetting)

module.exports = router;