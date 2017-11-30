/**
 * Returns core query object from optional querystring inputs 
*/

exports.coreQuery = (req) => {
  const query = {}
  
  if (req.query.core_serial) {
    query.core_serial = req.query.core_serial
  }
  if (req.query.status) {
    query.status = req.query.status
  }
  if (req.query.original_launch) {
    query.original_launch = req.query.original_launch
  }
  if (req.query.missions) {
    query.missions = req.query.missions
  }
  if (req.query.rtls_attempt) {
    query.rtls_attempt = (req.query.rtls_attempt == "true")
  }
  if (req.query.rtls_landings) {
    query.rtls_landings = parseInt(req.query.rtls_landings)
  }
  if (req.query.asds_attempt) {
    query.asds_attempt = (req.query.asds_attempt == "true")
  }
  if (req.query.asds_landings) {
    query.asds_landings = parseInt(req.query.asds_landings)
  }
  if (req.query.water_landing) {
    query.water_landing = (req.query.water_landing == "true")
  }
  return query
}
