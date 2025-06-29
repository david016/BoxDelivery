import axios from 'axios';
import * as csv from 'csvtojson';

const SHEET_CSV_URL =
  'https://docs.google.com/spreadsheets/d/e/2PACX-1vRFQ7UnyNMoYYxemBJyPNXkMzMlRlYxUXlDuTGPf_bNiL-C2nVBH2qF4U-3BpKKCAkf0loCNl_sK5mc/pub?output=csv';

export async function fetchSheetAsJson(): Promise<any[]> {
  try {
    const response = await axios.get(SHEET_CSV_URL);
    const csvData = response.data;

    const json = await csv().fromString(csvData);
    console.log(JSON.stringify(json, null, 2));
    return json;
  } catch (err) {
    throw new Error('Failed to fetch or convert sheet data');
  }
}
