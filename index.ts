import fetch from "node-fetch";

const mozillaSchemaUrl =
  "https://hg.mozilla.org/comm-central/raw-file/tip/mail/components/extensions/schemas/";

const dowloadSchemas = async () => {
  const response = await fetch(mozillaSchemaUrl);
  const data = await response.text();
  console.log(data);
};

void dowloadSchemas();
