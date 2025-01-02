const Setting = require('../model/settingModel')

exports.getSettings = async (req, res) => {
    try {
      const settings = await Setting.find();
      res.json(settings);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
};

exports.createSetting = async (req, res) => {
    try {
        // console.log("Request body:", req.body);
        const data = await Setting.create(req.body);
        res.status(201).send(data);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
};

exports.updateSetting = async (req, res) => {
  let settings = Setting.findById(req.params.id)
  if (!settings) {
      return res.status(500).json({
          success: false,
          message: "settings not found"
      })
  }
  settings = await Setting.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
      useFindAndModify: false
  })
  res.status(200).json({
      success: true,
      settings
  })
};

exports.deleteSetting = async (req, res) => {
    let settings = Setting.findById(req.params.id)
    if (!settings) {
        return res.status(500).json({
            success: false,
            message: "settings not found"
        })
    }
    await settings.deleteOne();
    res.status(200).json({
        success: true,
        message: "delete settings successfully"
    })
};