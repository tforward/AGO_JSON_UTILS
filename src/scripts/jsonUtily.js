import * as R from "ramda";

export function log(data) {
  console.log(data);
}

export function configJson(lyrName, data) {
  const lyrGroup = rtnLayerGroup(data);
  return R.find(R.propEq("id", lyrName))(data[lyrGroup]);
}

function rtnLayerGroup(data) {
  const hasOpsLayers = R.has("operationalLayers");
  const hasLayers = R.has("layers");

  if (hasOpsLayers(data)) {
    return "operationalLayers";
  }
  if (hasLayers(data)) {
    return "layers";
  }
  return false;
}
