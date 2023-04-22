-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Apr 22, 2023 at 04:21 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `budget_app`
--

-- --------------------------------------------------------

--
-- Table structure for table `expenses`
--

CREATE TABLE `expenses` (
  `expenseID` int(11) NOT NULL,
  `userEmail` varchar(50) NOT NULL,
  `expenseType` varchar(60) NOT NULL,
  `expenseSource` varchar(60) NOT NULL,
  `expenseAmount` float NOT NULL,
  `month` varchar(20) NOT NULL,
  `year` int(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `expenses`
--

INSERT INTO `expenses` (`expenseID`, `userEmail`, `expenseType`, `expenseSource`, `expenseAmount`, `month`, `year`) VALUES
(1, '', 'Grocery', 'Walmart', 15, '', 0),
(3, '', 'Grocery', 'Freshco', 43.19, '', 0),
(5, 'jagjyot@email.com', 'Subscription', 'Tiffin Service', 200, 'SEPTEMBER', 2017),
(6, 'jagjyot@email.com', 'Car repairing', 'Car', 500, 'APRIL', 2023);

-- --------------------------------------------------------

--
-- Table structure for table `friends`
--

CREATE TABLE `friends` (
  `fid` int(11) NOT NULL,
  `firstName` varchar(255) NOT NULL,
  `lastName` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `friends`
--

INSERT INTO `friends` (`fid`, `firstName`, `lastName`, `email`) VALUES
(4, 'abcd', 'fghd', 'abdcjhd@gmail.com'),
(5, 'jack', 'nick', 'jacknikc@gmail.com'),
(6, '', '', ''),
(7, 'ashysd', 'sdasf', 'ahjfgs@gmail.com'),
(8, 'a', 'n', 'sd@gmail.com'),
(9, 'a', 'n', 'sd@gmail.com'),
(10, 'Jag', 'Singh', 'jagjyot@email.com');

-- --------------------------------------------------------

--
-- Table structure for table `incomes`
--

CREATE TABLE `incomes` (
  `incomeID` int(11) NOT NULL,
  `userEmail` varchar(50) NOT NULL,
  `incomeType` varchar(255) NOT NULL,
  `incomeSource` varchar(255) NOT NULL,
  `incomeAmount` float NOT NULL,
  `month` varchar(20) NOT NULL,
  `year` int(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `incomes`
--

INSERT INTO `incomes` (`incomeID`, `userEmail`, `incomeType`, `incomeSource`, `incomeAmount`, `month`, `year`) VALUES
(1, '1', 'Pay', 'Subway', 630.35, '', 0),
(4, 'jagjyot@email.com', 'AccomodationRent', 'Room1', 350, 'SEPTEMBER', 2017),
(5, 'jagjyot@email.com', 'Rent', 'Car Rent', 100, 'MAY', 2020),
(6, 'jagjyot@email.com', 'Rent', 'Belmont Apt Rent', 1600, 'APRIL', 2023),
(7, 'viratcontractor97@gmail.com', 'Refund', 'Tax Refund', 1000, 'APRIL', 2023);

-- --------------------------------------------------------

--
-- Table structure for table `sw_expenses`
--

CREATE TABLE `sw_expenses` (
  `eid` int(11) NOT NULL,
  `fid` int(11) NOT NULL,
  `amount` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `sw_expenses`
--

INSERT INTO `sw_expenses` (`eid`, `fid`, `amount`, `description`) VALUES
(5, 5, '23', 'food'),
(6, 5, '34', 'groc'),
(7, 4, '50', 'drink'),
(8, 5, '43', 'drink'),
(9, 4, '50', 'drink'),
(10, 4, '50', 'drink'),
(11, 4, '20', 'food'),
(12, 6, '', ''),
(13, 6, '', ''),
(14, 6, '', ''),
(15, 7, '43', 'dfg'),
(16, 8, '34', 'chai'),
(17, 8, '34', 'chai'),
(18, 9, '34', 'chai'),
(20, 10, '50', 'Coffee');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `firstname` varchar(50) NOT NULL,
  `lastname` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`firstname`, `lastname`, `email`, `password`) VALUES
('John', 'Doe', 'johndoe@mail.com', 'password'),
('John', 'Doe', 'johndoe@mail.com', 'password'),
('Jagjyot', 'Singh', 'jagjyot98@gmail.com', 'password'),
('Virat', 'Contractor', 'viratcontractor97@gmail.com', 'Qwerty@123');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `expenses`
--
ALTER TABLE `expenses`
  ADD PRIMARY KEY (`expenseID`);

--
-- Indexes for table `friends`
--
ALTER TABLE `friends`
  ADD PRIMARY KEY (`fid`);

--
-- Indexes for table `incomes`
--
ALTER TABLE `incomes`
  ADD PRIMARY KEY (`incomeID`);

--
-- Indexes for table `sw_expenses`
--
ALTER TABLE `sw_expenses`
  ADD PRIMARY KEY (`eid`),
  ADD KEY `fid` (`fid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `expenses`
--
ALTER TABLE `expenses`
  MODIFY `expenseID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `friends`
--
ALTER TABLE `friends`
  MODIFY `fid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `incomes`
--
ALTER TABLE `incomes`
  MODIFY `incomeID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `sw_expenses`
--
ALTER TABLE `sw_expenses`
  MODIFY `eid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `sw_expenses`
--
ALTER TABLE `sw_expenses`
  ADD CONSTRAINT `fid` FOREIGN KEY (`fid`) REFERENCES `friends` (`fid`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
