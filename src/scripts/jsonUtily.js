import * as R from "ramda";

export function log(data) {
  console.log(data);
}

export function configJson(layername, data) {
  // May need check if no operationlayer user "layers"
  const hasLayerName = R.has(layername);

  const x = R.pick(["operationalLayers"], data);

  return x;
}

function accessLayerJson(id, data) {}
