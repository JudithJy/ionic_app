//imports required dependencies
const db = require("./db");

// inserting into respondent table
exports.postContact = (req, res) => {
  const sql =
  "INSERT INTO contact (contact_name, email, phone, address, contact_subject) VALUES (?, ?, ?, ?, ?)";
  db.query(
    sql,
    [req.body.contact_name, req.body.email, req.body.phone, req.body.address, req.body.contact_subject],
    (err, rows, fields) => {
      if (!err) {
        res.json(rows);
      } else {
        throw err;
      }
    }
  );
};

// get data from contact table
exports.getContacts = (req, res) =>{
  db.query("SELECT * FROM contact", async (err, rows, fields)=> {
      if(!err){
        res.json(rows);
        console.log(rows);
      }else
    throw err;
  });
}

// get data from upcomingEvents table
exports.getUpcomingEvents = (req, res) =>{
  db.query("SELECT * FROM upcomingEvents", async (err, rows, fields)=> {
      if(!err){
        res.json(rows);
        console.log(rows);
      }else
    throw err;
  });
}
 
// inserting into partners table
exports.postPartners = (req, res) => {
  const sql =
    "INSERT INTO partners (partner_name, company_name, email, phone) VALUES (?, ?, ?, ?)";
  db.query(
    sql,
    [req.body.partner_name, req.body.company_name, req.body.email, req.body.phone],
    (err, rows, fields) => {
      if (!err) {
        res.json(rows);
        console.log(rows);
      } else {
        throw err;
      }
    }
  );
};
 
// inserting into sponsor table
exports.postSponsor = (req, res) => {
  const sql =
    "INSERT INTO sponsors (sponsor_name, sponsor_surname, prefered_contactmethod,\
    email, phone, industry, sponsorship_description, sourceofinformation) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
  db.query(
    sql,
    [req.body.sponsor_name, req.body.sponsor_surname, req.body.prefered_contactmethod, 
    req.body.email, req.body.phone, req.body.industry, req.body.sponsorship_description, 
    req.body.sourceofinformation],
    (err, rows, fields) => {
      if (!err) {
        res.json(rows);
      } else {
        throw err;
      }
    }
  );
};

// inserting into partners table
exports.postHackathons = (req, res) => {
  const sql =
    "INSERT INTO hackathons (participant_name, id_number, email_address, \
       whatsapp_number, disability, disability_description, update_participant, \
       development_experience, familiar_language, programming_experience,\
       cloudprovider_expertise, hackathons_participation,\
       which_hackathons, sourceofinformation) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
  db.query(
    sql,
    [req.body.participant_name, req.body.id_number, req.body.email_address, req.body.whatsapp_number, 
     req.body.disability, req.body.disability_description, req.body.update_participant, req.body.development_experience,
     req.body.familiar_language, req.body.programming_experience,req.body.cloudprovider_expertise,req.body.hackathons_participation, 
     req.body.which_hackathons, req.body.sourceofinformation],
    (err, rows, fields) => {
      if (!err) {
        res.json(rows);
      } else {
        throw err;
      }
    }
  );
};

