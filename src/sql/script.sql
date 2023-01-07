-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema dbuildery
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema dbuildery
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `dbuildery` DEFAULT CHARACTER SET utf8mb3 ;
USE `dbuildery` ;

-- -----------------------------------------------------
-- Table `dbuildery`.`Project`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `dbuildery`.`Project` ;

CREATE TABLE IF NOT EXISTS `dbuildery`.`Project` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `description` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `dbuildery`.`Role`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `dbuildery`.`Role` ;

CREATE TABLE IF NOT EXISTS `dbuildery`.`Role` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `slug` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  UNIQUE INDEX `slug_UNIQUE` (`slug` ASC) VISIBLE)
ENGINE = InnoDB
AUTO_INCREMENT = 4
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `dbuildery`.`User`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `dbuildery`.`User` ;

CREATE TABLE IF NOT EXISTS `dbuildery`.`User` (
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
-- Table `dbuildery`.`Member`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `dbuildery`.`Member` ;

CREATE TABLE IF NOT EXISTS `dbuildery`.`Member` (
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
    REFERENCES `dbuildery`.`Project` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_Member_Role1`
    FOREIGN KEY (`Role_id`)
    REFERENCES `dbuildery`.`Role` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_Member_User1`
    FOREIGN KEY (`User_id`)
    REFERENCES `dbuildery`.`User` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `dbuildery`.`Executor`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `dbuildery`.`Executor` ;

CREATE TABLE IF NOT EXISTS `dbuildery`.`Executor` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `Member_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  INDEX `fk_Executor_Member1_idx` (`Member_id` ASC) VISIBLE,
  CONSTRAINT `fk_Executor_Member1`
    FOREIGN KEY (`Member_id`)
    REFERENCES `dbuildery`.`Member` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `dbuildery`.`Section`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `dbuildery`.`Section` ;

CREATE TABLE IF NOT EXISTS `dbuildery`.`Section` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `Project_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_Section_Project1_idx` (`Project_id` ASC) VISIBLE,
  CONSTRAINT `fk_Section_Project1`
    FOREIGN KEY (`Project_id`)
    REFERENCES `dbuildery`.`Project` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `dbuildery`.`Task`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `dbuildery`.`Task` ;

CREATE TABLE IF NOT EXISTS `dbuildery`.`Task` (
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
    REFERENCES `dbuildery`.`Executor` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_Task_Section1`
    FOREIGN KEY (`Section_id`)
    REFERENCES `dbuildery`.`Section` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `dbuildery`.`Attachment`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `dbuildery`.`Attachment` ;

CREATE TABLE IF NOT EXISTS `dbuildery`.`Attachment` (
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
    REFERENCES `dbuildery`.`Task` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `dbuildery`.`Grant`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `dbuildery`.`Grant` ;

CREATE TABLE IF NOT EXISTS `dbuildery`.`Grant` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `slug` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  UNIQUE INDEX `slug_UNIQUE` (`slug` ASC) VISIBLE)
ENGINE = InnoDB
AUTO_INCREMENT = 35
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `dbuildery`.`RoleGrant`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `dbuildery`.`RoleGrant` ;

CREATE TABLE IF NOT EXISTS `dbuildery`.`RoleGrant` (
  `Role_id` INT NOT NULL,
  `Grant_id` INT NOT NULL,
  INDEX `fk_RoleGrant_Grant1_idx` (`Grant_id` ASC) VISIBLE,
  INDEX `fk_RoleGrant_Role1_idx` (`Role_id` ASC) VISIBLE,
  PRIMARY KEY (`Role_id`, `Grant_id`),
  CONSTRAINT `fk_RoleGrant_Grant1`
    FOREIGN KEY (`Grant_id`)
    REFERENCES `dbuildery`.`Grant` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_RoleGrant_Role1`
    FOREIGN KEY (`Role_id`)
    REFERENCES `dbuildery`.`Role` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `dbuildery`.`Role`
-- -----------------------------------------------------
START TRANSACTION;
USE `dbuildery`;
INSERT INTO `dbuildery`.`Role` (`id`, `slug`) VALUES (DEFAULT, 'customer');
INSERT INTO `dbuildery`.`Role` (`id`, `slug`) VALUES (DEFAULT, 'teamlead');
INSERT INTO `dbuildery`.`Role` (`id`, `slug`) VALUES (DEFAULT, 'developer');

COMMIT;


-- -----------------------------------------------------
-- Data for table `dbuildery`.`Grant`
-- -----------------------------------------------------
START TRANSACTION;
USE `dbuildery`;
INSERT INTO `dbuildery`.`Grant` (`id`, `slug`) VALUES (DEFAULT, 'delete_project');
INSERT INTO `dbuildery`.`Grant` (`id`, `slug`) VALUES (DEFAULT, 'add_section');
INSERT INTO `dbuildery`.`Grant` (`id`, `slug`) VALUES (DEFAULT, 'delete_section');
INSERT INTO `dbuildery`.`Grant` (`id`, `slug`) VALUES (DEFAULT, 'create_task');
INSERT INTO `dbuildery`.`Grant` (`id`, `slug`) VALUES (DEFAULT, 'edit_task');
INSERT INTO `dbuildery`.`Grant` (`id`, `slug`) VALUES (DEFAULT, 'remove_task');
INSERT INTO `dbuildery`.`Grant` (`id`, `slug`) VALUES (DEFAULT, 'accept_task');
INSERT INTO `dbuildery`.`Grant` (`id`, `slug`) VALUES (DEFAULT, 'refuse_task');
INSERT INTO `dbuildery`.`Grant` (`id`, `slug`) VALUES (DEFAULT, 'add_member');
INSERT INTO `dbuildery`.`Grant` (`id`, `slug`) VALUES (DEFAULT, 'change_rights');
INSERT INTO `dbuildery`.`Grant` (`id`, `slug`) VALUES (DEFAULT, 'delete_member');
INSERT INTO `dbuildery`.`Grant` (`id`, `slug`) VALUES (DEFAULT, 'create_attachment');
INSERT INTO `dbuildery`.`Grant` (`id`, `slug`) VALUES (DEFAULT, 'edit_attachment');
INSERT INTO `dbuildery`.`Grant` (`id`, `slug`) VALUES (DEFAULT, 'remove_attachment');


COMMIT;

-- -----------------------------------------------------
-- Data for table `dbuildery`.`Role_Grant`
-- -----------------------------------------------------
START TRANSACTION;
USE `dbuildery`;-- customer
insert into dbuildery.RoleGrant (Role_id, Grant_id)
values ( (select dbuildery.Role.id from dbuildery.Role where dbuildery.Role.slug='customer')
			,(select dbuildery.Grant.id from dbuildery.Grant where dbuildery.Grant.slug='delete_project')
		);
insert into dbuildery.RoleGrant (Role_id, Grant_id)
values ((select dbuildery.Role.id from dbuildery.Role where dbuildery.Role.slug='customer')
			,(select dbuildery.Grant.id from dbuildery.Grant where dbuildery.Grant.slug='add_member')
		);
insert into dbuildery.RoleGrant (Role_id, Grant_id)
values ((select dbuildery.Role.id from dbuildery.Role where dbuildery.Role.slug='customer')
			,(select dbuildery.Grant.id from dbuildery.Grant where dbuildery.Grant.slug='delete_member')
		);
insert into dbuildery.RoleGrant (Role_id, Grant_id)
values ((select dbuildery.Role.id from dbuildery.Role where dbuildery.Role.slug='customer')
			,(select dbuildery.Grant.id from dbuildery.Grant where dbuildery.Grant.slug='change_rights')
		);


-- teamlead
insert into dbuildery.RoleGrant (Role_id, Grant_id)
values ( (select dbuildery.Role.id from dbuildery.Role where dbuildery.Role.slug='teamlead')
			,(select dbuildery.Grant.id from dbuildery.Grant where dbuildery.Grant.slug='add_section')
		);
insert into dbuildery.RoleGrant (Role_id, Grant_id)
values ( (select dbuildery.Role.id from dbuildery.Role where dbuildery.Role.slug='teamlead')
			,(select dbuildery.Grant.id from dbuildery.Grant where dbuildery.Grant.slug='delete_section')
		);
insert into dbuildery.RoleGrant (Role_id, Grant_id)
values ( (select dbuildery.Role.id from dbuildery.Role where dbuildery.Role.slug='teamlead')
			,(select dbuildery.Grant.id from dbuildery.Grant where dbuildery.Grant.slug='create_task')
		);
insert into dbuildery.RoleGrant (Role_id, Grant_id)
values ( (select dbuildery.Role.id from dbuildery.Role where dbuildery.Role.slug='teamlead')
			,(select dbuildery.Grant.id from dbuildery.Grant where dbuildery.Grant.slug='edit_task')
		);
insert into dbuildery.RoleGrant (Role_id, Grant_id)
values ( (select dbuildery.Role.id from dbuildery.Role where dbuildery.Role.slug='teamlead')
			,(select dbuildery.Grant.id from dbuildery.Grant where dbuildery.Grant.slug='remove_task')
		);
insert into dbuildery.RoleGrant (Role_id, Grant_id)
values ( (select dbuildery.Role.id from dbuildery.Role where dbuildery.Role.slug='teamlead')
			,(select dbuildery.Grant.id from dbuildery.Grant where dbuildery.Grant.slug='create_attachment')
		);
insert into dbuildery.RoleGrant (Role_id, Grant_id)
values ( (select dbuildery.Role.id from dbuildery.Role where dbuildery.Role.slug='teamlead')
			,(select dbuildery.Grant.id from dbuildery.Grant where dbuildery.Grant.slug='edit_attachment')
		);
insert into dbuildery.RoleGrant (Role_id, Grant_id)
values ( (select dbuildery.Role.id from dbuildery.Role where dbuildery.Role.slug='teamlead')
			,(select dbuildery.Grant.id from dbuildery.Grant where dbuildery.Grant.slug='remove_attachment')
		);
insert into dbuildery.RoleGrant (Role_id, Grant_id)
values ( (select dbuildery.Role.id from dbuildery.Role where dbuildery.Role.slug='teamlead')
			,(select dbuildery.Grant.id from dbuildery.Grant where dbuildery.Grant.slug='add_member')
		);
        
        
-- developer
insert into dbuildery.RoleGrant (Role_id, Grant_id)
values ( (select dbuildery.Role.id from dbuildery.Role where dbuildery.Role.slug='developer')
			,(select dbuildery.Grant.id from dbuildery.Grant where dbuildery.Grant.slug='accept_task')
		);
insert into dbuildery.RoleGrant (Role_id, Grant_id)
values ( (select dbuildery.Role.id from dbuildery.Role where dbuildery.Role.slug='developer')
			,(select dbuildery.Grant.id from dbuildery.Grant where dbuildery.Grant.slug='refuse_task')
		);


COMMIT;