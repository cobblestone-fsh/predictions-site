
const fs = require('fs-extra');
const underscore = require('underscore');

const { Predictor, Prediction } = require('./db');

async function main() {
  let predictors = await Predictor.find({}).exec();
  let predictions = await Prediction.find({ isResolved: false }).exec();
  let resolved = await Prediction.find({ isResolved: true }).exec();
  predictors = underscore.sortBy(predictors, (p) => 0 - p.currentScore);
  await fs.writeFile('./src/_data/predictors.json', JSON.stringify(predictors));
  await fs.writeFile('./src/_data/ongoing_predictions.json', JSON.stringify(predictions));
  await fs.writeFile('./src/_data/resolved_predictions.json', JSON.stringify(resolved));
}

main().then(() => process.exit());