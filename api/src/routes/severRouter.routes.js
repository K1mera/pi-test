const { Router } = require("express");
const router = Router();

const {
  getCountries,
  getCountryById,
  getCountryByName,
  getAllCountries,
} = require("../controllers/countriesControl");
const {
  getActivity,
  createActivity,
} = require("../controllers/activity.control");



router.get("/all-countries", async (req, res) => {
  try {
    const allCountries = await getAllCountries();
    res.status(200).json(allCountries);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/countries", async (req, res) => {
  try {
    const countries = await getCountries();
    res.status(200).json(countries);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/countries/name", async (req, res) => {
  const name = req.query.name;
  if (!name) {
    return res.status(400).json({ message: "name is mandatory" });
  }
  try {
    const countryName = await getCountryByName(name);
    if (!countryName || countryName.length === 0) {
      res.status(404).json('Not countries found');
    }
    res.status(200).json(countryName);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/countries/:id", async (req, res) => {
  try {
    const country = await getCountryById(req.params.id);
    res.status(200).json(country);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/activities", async (req, res) => {
  try {
    const activities = await getActivity();
    res.status(200).json(activities);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post("/activities", async (req, res) => {
  try {
    const activity = req.body;
    const { countryId } = req.body;
    const newActivity = await createActivity(activity, countryId);
    res.status(200).json(newActivity);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


router.put("/");
router.delete("/");

module.exports = router;

module.exports = router;
