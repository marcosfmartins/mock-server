const fs = require('fs');

function getData(dir) {
  const result = [];

  try {
    fs.readdirSync(dir).forEach((file) => {
      try {
        const data = fs.readFileSync(`${dir}/${file}`);
        const jsonData = JSON.parse(data);

        if (jsonData && Array.isArray(jsonData)) {
          result.push(...jsonData);
        } else if (jsonData) {
          result.push(jsonData);
        }
      } catch (e) {
        console.log(`Error File ${file} => ${e}`);
      }
    });
  } catch (e) {
    console.log(`erro ao ler o diretorio => ${e}`);
  }

  return result;
}

module.exports = {
  getData,
};
