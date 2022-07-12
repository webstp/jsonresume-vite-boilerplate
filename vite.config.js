import { resolve } from 'path';
import { readFileSync } from 'fs';
import getConfig from "./config"

const getResume = () => {
  try {
    const localResume = readFileSync(resolve(__dirname, 'resume.json'));
    return JSON.parse(localResume);
  }
  catch (e) {
    const sampleResume = readFileSync(resolve(__dirname, 'resume-sample.json'));
    return JSON.parse(sampleResume);
  }

}

export default getConfig(getResume())