module.exports = (htmlTemplate, productObject) => {
  let output = htmlTemplate.replace(/{%NAME%}/g, productObject.productName);
  output = output.replace(/{%IMAGE%}/g, productObject.image);
  output = output.replace(/{%COUNTRY%}/g, productObject.from);
  output = output.replace(/{%NUTRIENTS%}/g, productObject.nutrients);
  output = output.replace(/{%QUANTITY%}/g, productObject.quantity);
  output = output.replace(/{%DESCRIPTION%}/g, productObject.description);
  output = output.replace(/{%PRICE%}/g, productObject.price);
  output = output.replace(/{%ID%}/g, productObject.id);

  if (!productObject.organic)
    output = output.replace(/{%NOT_ORGANIC%}/g, 'not-organic');
  else
    output = output.replace(/{%NOT_ORGANIC%}/g, '');

  return output;
}