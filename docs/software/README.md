# Реалізація інформаційного та програмного забезпечення

В рамках проекту розробляється: 
# SQL-скрипт для створення на початкового наповнення бази даних
```sql
-- MySQL Workbench Forward Engineering  
  
SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;  
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;  
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';  
  
-- -----------------------------------------------------  
-- Schema mydb  
-- -----------------------------------------------------  
  
-- -----------------------------------------------------  
-- Schema mydb  
-- -----------------------------------------------------  
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8mb3 ;  
USE `mydb` ;  
  
-- -----------------------------------------------------  
-- Table `mydb`.`Project`  
-- -----------------------------------------------------  
DROP TABLE IF EXISTS `mydb`.`Project` ;  
  
CREATE TABLE IF NOT EXISTS `mydb`.`Project` (  
  `id` INT NOT NULL AUTO_INCREMENT,  
  `name` VARCHAR(45) NOT NULL,  
  `description` VARCHAR(100) NOT NULL,  
  PRIMARY KEY (`id`),  
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE)  
ENGINE = InnoDB  
DEFAULT CHARACTER SET = utf8mb3;  
  
  
-- -----------------------------------------------------  
-- Table `mydb`.`Role`  
-- -----------------------------------------------------  
DROP TABLE IF EXISTS `mydb`.`Role` ;  
  
CREATE TABLE IF NOT EXISTS `mydb`.`Role` (  
  `id` INT NOT NULL AUTO_INCREMENT,  
  `slug` VARCHAR(45) NOT NULL,  
  PRIMARY KEY (`id`),  
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,  
  UNIQUE INDEX `slug_UNIQUE` (`slug` ASC) VISIBLE)  
ENGINE = InnoDB  
AUTO_INCREMENT = 4  
DEFAULT CHARACTER SET = utf8mb3;  
  
  
-- -----------------------------------------------------  
-- Table `mydb`.`User`  
-- -----------------------------------------------------  
DROP TABLE IF EXISTS `mydb`.`User` ;  
  
CREATE TABLE IF NOT EXISTS `mydb`.`User` (  
  `id` INT NOT NULL AUTO_INCREMENT,  
  `login` VARCHAR(45) NOT NULL,  
  `password` VARCHAR(45) NOT NULL,  
  `email` VARCHAR(45) NOT NULL,  
  PRIMARY KEY (`id`),  
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE,  
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE)  
ENGINE = InnoDB  
DEFAULT CHARACTER SET = utf8mb3;  
  
  
-- -----------------------------------------------------  
-- Table `mydb`.`Member`  
-- -----------------------------------------------------  
DROP TABLE IF EXISTS `mydb`.`Member` ;  
  
CREATE TABLE IF NOT EXISTS `mydb`.`Member` (  
  `id` INT NOT NULL AUTO_INCREMENT,  
  `Project_id` INT NOT NULL,  
  `Role_id` INT NOT NULL,  
  `User_id` INT NOT NULL,  
  PRIMARY KEY (`id`),  
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,  
  INDEX `fk_Member_Project1_idx` (`Project_id` ASC) VISIBLE,  
  INDEX `fk_Member_Role1_idx` (`Role_id` ASC) VISIBLE,  
  INDEX `fk_Member_User1_idx` (`User_id` ASC) VISIBLE,  
  CONSTRAINT `fk_Member_Project1`  
    FOREIGN KEY (`Project_id`)  
    REFERENCES `mydb`.`Project` (`id`)  
    ON DELETE CASCADE  
    ON UPDATE CASCADE,  
  CONSTRAINT `fk_Member_Role1`  
    FOREIGN KEY (`Role_id`)  
    REFERENCES `mydb`.`Role` (`id`)  
    ON DELETE CASCADE  
    ON UPDATE CASCADE,  
  CONSTRAINT `fk_Member_User1`  
    FOREIGN KEY (`User_id`)  
    REFERENCES `mydb`.`User` (`id`)  
    ON DELETE CASCADE  
    ON UPDATE CASCADE)  
ENGINE = InnoDB  
DEFAULT CHARACTER SET = utf8mb3;  
  
  
-- -----------------------------------------------------  
-- Table `mydb`.`Executor`  
-- -----------------------------------------------------  
DROP TABLE IF EXISTS `mydb`.`Executor` ;  
  
CREATE TABLE IF NOT EXISTS `mydb`.`Executor` (  
  `id` INT NOT NULL AUTO_INCREMENT,  
  `Member_id` INT NOT NULL,  
  PRIMARY KEY (`id`),  
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,  
  INDEX `fk_Executor_Member1_idx` (`Member_id` ASC) VISIBLE,  
  CONSTRAINT `fk_Executor_Member1`  
    FOREIGN KEY (`Member_id`)  
    REFERENCES `mydb`.`Member` (`id`)  
    ON DELETE CASCADE  
    ON UPDATE CASCADE)  
ENGINE = InnoDB  
DEFAULT CHARACTER SET = utf8mb3;  
  
  
-- -----------------------------------------------------  
-- Table `mydb`.`Section`  
-- -----------------------------------------------------  
DROP TABLE IF EXISTS `mydb`.`Section` ;  
  
CREATE TABLE IF NOT EXISTS `mydb`.`Section` (  
  `id` INT NOT NULL AUTO_INCREMENT,  
  `name` VARCHAR(45) NOT NULL,  
  `Project_id` INT NOT NULL,  
  PRIMARY KEY (`id`),  
  INDEX `fk_Section_Project1_idx` (`Project_id` ASC) VISIBLE,  
  CONSTRAINT `fk_Section_Project1`  
    FOREIGN KEY (`Project_id`)  
    REFERENCES `mydb`.`Project` (`id`)  
    ON DELETE CASCADE  
    ON UPDATE CASCADE)  
ENGINE = InnoDB  
DEFAULT CHARACTER SET = utf8mb3;  
  
  
-- -----------------------------------------------------  
-- Table `mydb`.`Task`  
-- -----------------------------------------------------  
DROP TABLE IF EXISTS `mydb`.`Task` ;  
  
CREATE TABLE IF NOT EXISTS `mydb`.`Task` (  
  `id` INT NOT NULL AUTO_INCREMENT,  
  `name` VARCHAR(45) NOT NULL,  
  `description` VARCHAR(100) NULL DEFAULT NULL,  
  `deadline` DATETIME NULL DEFAULT NULL,  
  `Section_id` INT NOT NULL,  
  `Executor_id` INT NOT NULL,  
  PRIMARY KEY (`id`),  
  INDEX `fk_Task_Section1_idx` (`Section_id` ASC) VISIBLE,  
  INDEX `fk_Task_Executor1_idx` (`Executor_id` ASC) VISIBLE,  
  CONSTRAINT `fk_Task_Executor1`  
    FOREIGN KEY (`Executor_id`)  
    REFERENCES `mydb`.`Executor` (`id`)  
    ON DELETE CASCADE  
    ON UPDATE CASCADE,  
  CONSTRAINT `fk_Task_Section1`  
    FOREIGN KEY (`Section_id`)  
    REFERENCES `mydb`.`Section` (`id`)  
    ON DELETE CASCADE  
    ON UPDATE CASCADE)  
ENGINE = InnoDB  
DEFAULT CHARACTER SET = utf8mb3;  
  
  
-- -----------------------------------------------------  
-- Table `mydb`.`Attachment`  
-- -----------------------------------------------------  
DROP TABLE IF EXISTS `mydb`.`Attachment` ;  
  
CREATE TABLE IF NOT EXISTS `mydb`.`Attachment` (  
  `id` INT NOT NULL AUTO_INCREMENT,  
  `name` VARCHAR(45) NOT NULL,  
  `path` VARCHAR(45) NOT NULL,  
  `fileType` VARCHAR(45) NOT NULL,  
  `Task_id` INT NOT NULL,  
  PRIMARY KEY (`id`),  
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,  
  INDEX `fk_Attachment_Task_idx` (`Task_id` ASC) VISIBLE,  
  CONSTRAINT `fk_Attachment_Task`  
    FOREIGN KEY (`Task_id`)  
    REFERENCES `mydb`.`Task` (`id`)  
    ON DELETE CASCADE  
    ON UPDATE CASCADE)  
ENGINE = InnoDB  
DEFAULT CHARACTER SET = utf8mb3;  
  
  
-- -----------------------------------------------------  
-- Table `mydb`.`Grant`  
-- -----------------------------------------------------  
DROP TABLE IF EXISTS `mydb`.`Grant` ;  
  
CREATE TABLE IF NOT EXISTS `mydb`.`Grant` (  
  `id` INT NOT NULL AUTO_INCREMENT,  
  `slug` VARCHAR(45) NOT NULL,  
  PRIMARY KEY (`id`),  
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,  
  UNIQUE INDEX `slug_UNIQUE` (`slug` ASC) VISIBLE)  
ENGINE = InnoDB  
AUTO_INCREMENT = 35  
DEFAULT CHARACTER SET = utf8mb3;  
  
  
-- -----------------------------------------------------  
-- Table `mydb`.`RoleGrant`  
-- -----------------------------------------------------  
DROP TABLE IF EXISTS `mydb`.`RoleGrant` ;  
  
CREATE TABLE IF NOT EXISTS `mydb`.`RoleGrant` (  
  `Role_id` INT NOT NULL,  
  `Grant_id` INT NOT NULL,  
  INDEX `fk_RoleGrant_Grant1_idx` (`Grant_id` ASC) VISIBLE,  
  INDEX `fk_RoleGrant_Role1_idx` (`Role_id` ASC) VISIBLE,  
  PRIMARY KEY (`Role_id`, `Grant_id`),  
  CONSTRAINT `fk_RoleGrant_Grant1`  
    FOREIGN KEY (`Grant_id`)  
    REFERENCES `mydb`.`Grant` (`id`)  
    ON DELETE CASCADE  
    ON UPDATE CASCADE,  
  CONSTRAINT `fk_RoleGrant_Role1`  
    FOREIGN KEY (`Role_id`)  
    REFERENCES `mydb`.`Role` (`id`)  
    ON DELETE CASCADE  
    ON UPDATE CASCADE)  
ENGINE = InnoDB  
DEFAULT CHARACTER SET = utf8mb3;  
  
  
SET SQL_MODE=@OLD_SQL_MODE;  
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;  
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;  
  
-- -----------------------------------------------------  
-- Data for table `mydb`.`Role`  
-- -----------------------------------------------------  
START TRANSACTION;  
USE `mydb`;  
INSERT INTO `mydb`.`Role` (`id`, `slug`) VALUES (DEFAULT, 'customer');  
INSERT INTO `mydb`.`Role` (`id`, `slug`) VALUES (DEFAULT, 'teamlead');  
INSERT INTO `mydb`.`Role` (`id`, `slug`) VALUES (DEFAULT, 'developer');  
  
COMMIT;  
  
  
-- -----------------------------------------------------  
-- Data for table `mydb`.`Grant`  
-- -----------------------------------------------------  
START TRANSACTION;  
USE `mydb`;  
INSERT INTO `mydb`.`Grant` (`id`, `slug`) VALUES (DEFAULT, 'delete_project');  
INSERT INTO `mydb`.`Grant` (`id`, `slug`) VALUES (DEFAULT, 'add_section');  
INSERT INTO `mydb`.`Grant` (`id`, `slug`) VALUES (DEFAULT, 'delete_section');  
INSERT INTO `mydb`.`Grant` (`id`, `slug`) VALUES (DEFAULT, 'create_task');  
INSERT INTO `mydb`.`Grant` (`id`, `slug`) VALUES (DEFAULT, 'edit_task');  
INSERT INTO `mydb`.`Grant` (`id`, `slug`) VALUES (DEFAULT, 'remove_task');  
INSERT INTO `mydb`.`Grant` (`id`, `slug`) VALUES (DEFAULT, 'accept_task');  
INSERT INTO `mydb`.`Grant` (`id`, `slug`) VALUES (DEFAULT, 'refuse_task');  
INSERT INTO `mydb`.`Grant` (`id`, `slug`) VALUES (DEFAULT, 'add_member');  
INSERT INTO `mydb`.`Grant` (`id`, `slug`) VALUES (DEFAULT, 'change_rights');  
INSERT INTO `mydb`.`Grant` (`id`, `slug`) VALUES (DEFAULT, 'delete_member');  
INSERT INTO `mydb`.`Grant` (`id`, `slug`) VALUES (DEFAULT, 'create_attachment');  
INSERT INTO `mydb`.`Grant` (`id`, `slug`) VALUES (DEFAULT, 'edit_attachment');  
INSERT INTO `mydb`.`Grant` (`id`, `slug`) VALUES (DEFAULT, 'remove_attachment');  
  
  
COMMIT;  
  
-- -----------------------------------------------------  
-- Data for table `mydb`.`Role_Grant`  
-- -----------------------------------------------------  
START TRANSACTION;  
USE `mydb`;-- customer  
insert into mydb.RoleGrant (Role_id, Grant_id)  
values ( (select mydb.Role.id from mydb.Role where mydb.Role.slug='customer')  
			,(select mydb.Grant.id from mydb.Grant where mydb.Grant.slug='delete_project')  
		);  
insert into mydb.RoleGrant (Role_id, Grant_id)  
values ((select mydb.Role.id from mydb.Role where mydb.Role.slug='customer')  
			,(select mydb.Grant.id from mydb.Grant where mydb.Grant.slug='add_member')  
		);  
insert into mydb.RoleGrant (Role_id, Grant_id)  
values ((select mydb.Role.id from mydb.Role where mydb.Role.slug='customer')  
			,(select mydb.Grant.id from mydb.Grant where mydb.Grant.slug='delete_member')  
		);  
insert into mydb.RoleGrant (Role_id, Grant_id)  
values ((select mydb.Role.id from mydb.Role where mydb.Role.slug='customer')  
			,(select mydb.Grant.id from mydb.Grant where mydb.Grant.slug='change_rights')  
		);  
  
  
-- teamlead  
insert into mydb.RoleGrant (Role_id, Grant_id)  
values ( (select mydb.Role.id from mydb.Role where mydb.Role.slug='teamlead')  
			,(select mydb.Grant.id from mydb.Grant where mydb.Grant.slug='add_section')  
		);  
insert into mydb.RoleGrant (Role_id, Grant_id)  
values ( (select mydb.Role.id from mydb.Role where mydb.Role.slug='teamlead')  
			,(select mydb.Grant.id from mydb.Grant where mydb.Grant.slug='delete_section')  
		);  
insert into mydb.RoleGrant (Role_id, Grant_id)  
values ( (select mydb.Role.id from mydb.Role where mydb.Role.slug='teamlead')  
			,(select mydb.Grant.id from mydb.Grant where mydb.Grant.slug='create_task')  
		);  
insert into mydb.RoleGrant (Role_id, Grant_id)  
values ( (select mydb.Role.id from mydb.Role where mydb.Role.slug='teamlead')  
			,(select mydb.Grant.id from mydb.Grant where mydb.Grant.slug='edit_task')  
		);  
insert into mydb.RoleGrant (Role_id, Grant_id)  
values ( (select mydb.Role.id from mydb.Role where mydb.Role.slug='teamlead')  
			,(select mydb.Grant.id from mydb.Grant where mydb.Grant.slug='remove_task')  
		);  
insert into mydb.RoleGrant (Role_id, Grant_id)  
values ( (select mydb.Role.id from mydb.Role where mydb.Role.slug='teamlead')  
			,(select mydb.Grant.id from mydb.Grant where mydb.Grant.slug='create_attachment')  
		);  
insert into mydb.RoleGrant (Role_id, Grant_id)  
values ( (select mydb.Role.id from mydb.Role where mydb.Role.slug='teamlead')  
			,(select mydb.Grant.id from mydb.Grant where mydb.Grant.slug='edit_attachment')  
		);  
insert into mydb.RoleGrant (Role_id, Grant_id)  
values ( (select mydb.Role.id from mydb.Role where mydb.Role.slug='teamlead')  
			,(select mydb.Grant.id from mydb.Grant where mydb.Grant.slug='remove_attachment')  
		);  
insert into mydb.RoleGrant (Role_id, Grant_id)  
values ( (select mydb.Role.id from mydb.Role where mydb.Role.slug='teamlead')  
			,(select mydb.Grant.id from mydb.Grant where mydb.Grant.slug='add_member')  
		);  
          
          
-- developer  
insert into mydb.RoleGrant (Role_id, Grant_id)  
values ( (select mydb.Role.id from mydb.Role where mydb.Role.slug='developer')  
			,(select mydb.Grant.id from mydb.Grant where mydb.Grant.slug='accept_task')  
		);  
insert into mydb.RoleGrant (Role_id, Grant_id)  
values ( (select mydb.Role.id from mydb.Role where mydb.Role.slug='developer')  
			,(select mydb.Grant.id from mydb.Grant where mydb.Grant.slug='refuse_task')  
		);  
  
  
COMMIT;  
```

# RESTfull сервіс для управління даними

## Вхідний файл сервісу із налаштуванням серверу

```js
const express = require('express');
const bodyParser = require('body-parser');
const config = require('./server_config.json');

const app = express();
app.use(bodyParser.text());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/api', require('./routes'));

app.listen(config.port, () => {
  console.log(`Started on http://localhost:${config.port}`);
});
```

## Конфігураційний .json файл з інформацією про сервер

```json
{
    "port": "8080"
}
```

## Файл встановлення з'єдання з базою даних

```js
const mysql = require('mysql2/promise');
// Config is situated in .env file, which is not commited for security
require('dotenv').config();

const getConnection = async () => await mysql.createConnection({
  uri: process.env.DB_STRING,
  password: process.env.DB_PASSWORD,
});

module.exports = getConnection;
```

## .env файл із змінними середовища (приклад у /src/js/README.md)

## Файл, що задає Router

```js
const express = require('express');
const controllers = require('./controllers.js');

const router = new express.Router();

router.get('/task', controllers.getTasks);
router.get('/task/:id', controllers.getSingleTask);
router.post('/task', controllers.createTask);
router.put('/task/:id', controllers.updateTask);
router.delete('/task/:id', controllers.deleteTask);

module.exports = router;
```

## Файл зв'язку з базою даних

```js
const getConnection = require('./db.js');

/*
    SQL expression patterns. Values in <> are to be replaced.
*/
const exps = {
  readTasks: 'SELECT * FROM TASK',
  readSingleTask: 'SELECT * FROM TASK WHERE ID=<id>',
  /*
    Model requires every task to have a section, but my coursework variant doesn't include CRUD operations for Section.
    Therefore a stub Section entry with ID 1 will be assigned by default to every task.
  */
  createTask: 'INSERT INTO TASK(NAME, DESCRIPTION, DEADLINE, SECTION_ID) VALUES (<name>, <description>, <deadline>, 1)',
  updateTask: 'UPDATE TASK SET NAME=<name>, DESCRIPTION=<description>, DEADLINE=<deadline> WHERE ID=<id>',
  deleteTask: 'DELETE FROM TASK WHERE ID=<id>',
};

const sendDefaultOK = (res) => res.status(200).send({
  status: 200,
  message: 'Success',
});

const sendNotFound = (res) => res.status(404).send({
  status: 404,
  error: 'Not_Found',
});

const sendMissing = (res) => res.status(422).send({
  status: 422,
  error: 'Missing_Required_Parameters',
});

const sendServerError = (res) => res.status(500).send({
  status: 500,
  error: 'Server_Error',
});

const insertParams = (exp, params) => {
  if (!params) return exp;
  let newExp = exp;
  for (const [key, value] of Object.entries(params)) {
    newExp = newExp.replace('<' + key + '>', '\'' + value + '\'');
  }
  newExp = newExp.replace(/<[^<>]*>/g, 'NULL');
  return newExp;
};

const runSql = async (exp, params) => {
  const connection = await getConnection();
  try {
    const expFormatted = insertParams(exp, params);
    const [results] = await connection.execute(expFormatted);
    return results;
  } catch (err) {
    console.log(err.toString());
  } finally {
    connection.end();
  }
};

const validateParams = (required, params) => {
  for (const value of required) {
    if (params[value] === undefined) {
      return false;
    }
  }
  return true;
};

const getTasks = async (_, res) => {
  let result;
  try {
    result = await runSql(exps.readTasks);
  } catch (err) {
    return sendServerError(res);
  }
  res.status(200).send(result);
};

const getSingleTask = async (req, res) => {
  if (!validateParams(['id'], req.params)) {
    return sendMissing(res);
  }

  let result;
  try {
    result = await runSql(exps.readSingleTask, req.params);
  } catch (err) {
    return sendServerError(res);
  }

  if (result.length > 0) {
    res.status(200).send(result[0]);
  } else {
    sendNotFound(res);
  }
};

const createTask = async (req, res) => {
  if (!validateParams(['name', 'description'], req.body)) {
    return sendMissing(res);
  }

  let resultQuery;
  try {
    const resultCreation = await runSql(exps.createTask, req.body);
    resultQuery = await runSql(exps.readSingleTask, {
      id: resultCreation.insertId,
    });
  } catch (err) {
    return sendServerError(res);
  }

  res.status(200).send(resultQuery);
};

const getUpdateValues = async (req) => {
  const task = await runSql(exps.readSingleTask, req.params);
  const values = {...task[0], ...req.params, ...req.body};
  /*
    Handling timezone difference
  */
  if (values.deadline === null) {
    delete values.deadline;
  }
  if (typeof values.deadline === 'object') {
    const now = new Date();
    const offsetDate = new Date(values.deadline.getTime() - now.getTimezoneOffset() * 60000);
    values.deadline = offsetDate.toJSON().slice(0, 19);
  }
  return values;
};

const updateTask = async (req, res) => {
  const values = await getUpdateValues(req);

  if (!validateParams(['id', 'name', 'description'], values)) {
    if (!values.id) {
      return sendMissing(res);
    } else {
      return sendNotFound(res);
    }
  }

  let updatedResult;
  try {
    await runSql(exps.updateTask, values);
    updatedResult = await runSql(exps.readSingleTask, values);
  } catch (err) {
    return sendServerError(res);
  }

  res.status(200).send(updatedResult[0]);
};

const deleteTask = async (req, res) => {
  if (!validateParams(['id'], req.params)) {
    return sendMissing(res);
  }

  let result;
  try {
    result = await runSql(exps.deleteTask, req.params);
  } catch (err) {
    return sendServerError(res);
  }

  if (result.affectedRows != 0) {
    sendDefaultOK(res);
  } else {
    sendNotFound(res);
  }
};

module.exports = {getTasks, getSingleTask, createTask, updateTask, deleteTask};
```

