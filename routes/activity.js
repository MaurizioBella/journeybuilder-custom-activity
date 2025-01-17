const { v1: Uuidv1 } = require("uuid");
const JWT = require("../utils/jwtDecoder");
const SFClient = require("../utils/sfmc-client");
const logger = require("../utils/logger");

/**
 * The Journey Builder calls this method for each contact processed by the journey.
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
exports.execute = async (req, res) => {
  logger.info(req.headers);
  // decode data
  let data;
  try {
    data = await JWT(req.body);
    logger.info(data);
  } catch (error) {
    logger.error(error);
    res.status(401).send({ error: "Unauthorized" });
  }

  try {
    const id = Uuidv1();
    let msg = "DEFAULT";
    logger.info(data.inArguments[0]);
    if (data.inArguments[0].contactKey === "mauriziobella@gmail.com") {
      msg = "SMS";
    } else {
      msg = "EMAIL";
    }
    await SFClient.saveData(process.env.DATA_EXTENSION_EXTERNAL_KEY, [
      {
        keys: {
          SubscriberKey: data.inArguments[0].contactKey,
        },
        values: {
          EmailAddress: data.inArguments[0].contactKey,
          Text: msg,
        },
      },
    ]);
    // await SFClient.saveData(process.env.DATA_EXTENSION_EXTERNAL_KEY, [
    //   {
    //     keys: {
    //       Id: id,
    //       SubscriberKey: data.inArguments[0].contactKey,
    //     },
    //     values: {
    //       Event: data.inArguments[0].DropdownOptions,
    //       Text: data.inArguments[0].Text,
    //       EmailAddress: data.inArguments[0].contactKey,
    //     },
    //   },
    // ]);
  } catch (error) {
    logger.error(error);
    res.status(500).send();
  }

  res.status(200).send({
    status: "ok",
  });
};

/**
 * Endpoint that receives a notification when a user saves the journey.
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
exports.save = async (req, res) => {
  res.status(200).send({
    status: "ok",
  });
};

/**
 *  Endpoint that receives a notification when a user publishes the journey.
 * @param req
 * @param res
 */
exports.publish = (req, res) => {
  res.status(200).send({
    status: "ok",
  });
};

/**
 * Endpoint that receives a notification when a user performs
 * some validation as part of the publishing process.
 * @param req
 * @param res
 */
exports.validate = (req, res) => {
  res.status(200).send({
    status: "ok",
  });
};
