import credits from "../models/Credit.js";

class CreditController {

  static listCredits = (req, res) => {
    credits.find((err, credits) => {
      res.status(200).json(credits)
  })
  }

  static listCreditsById = (req, res) => {
    const id = req.params.userId;

    credits.find({userId: id}, (err, credits) => {
      if(err) {
        res.status(400).send({message: `${err.message} - Id credit not found.`})
      } else {
        res.status(200).send(credits);
      }
    })
  }

  static includeCredit = (req, res) => {
    let credit = new credits(req.body);

    credit.save((err) => {

      if(err) {
        res.status(500).send({message: `${err.message} - error to include credits.`})
      } else {
        res.status(201).send(credit.toJSON()),
        console.log('incluído')
      }
    })
  }

  static updateStatus = (req, res) => {
    const id = req.params.id;

    credits.findByIdAndUpdate(id, {$set: {status: "aprovado"}}, (err) => {
      if(!err) {
        res.status(200).send({message: 'status updated sucess'})
        res.value
      } else {
        res.status(500).send({message: err.message})
      }
    })
  }

  static updateCredit = (req, res) => {
    const id = req.params.id;

    credits.findByIdAndUpdate(id, {$set: req.body}, (err) => {
      if(!err) {
        res.status(200).send({message: 'credit updated sucess'})
      } else {
        res.status(500).send({message: err.message})
      }
    })
  }

  static deleteCredit = (req, res) => {
    const id = req.params.id;

    credits.findByIdAndDelete(id, (err) => {
      if(!err){
        res.status(200).send({message: 'credit removed'})
      } else {
        res.status(500).send({message: err.message})
      }
    })
  }

}

export default CreditController