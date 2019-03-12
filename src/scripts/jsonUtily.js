import * as R from "ramda";

export function log(data) {
  console.log(data);
}

export function configJson(lyrName, data) {
  const lyrGroup = rtnLayerGroup(data);

  const lyrObj = R.find(R.propEq("id", lyrName))(data[lyrGroup]);
  const lyrs = R.prop("layers", lyrObj);

  const layerIdsTitles = R.map(pickIdTitle, lyrs);
  log(layerIdsTitles);

  return lyrObj;
}
function pickIdTitle(lyr) {
  const id = R.pick(["id"], lyr);
  const title = R.prop(["title"], lyr.popupInfo);
  const justTitle = R.head(R.take(1, R.split(":", title)));
  return R.mergeRight(id, { title: justTitle });
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
