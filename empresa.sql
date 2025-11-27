-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:8889
-- Tiempo de generación: 27-11-2025 a las 22:11:10
-- Versión del servidor: 8.0.40
-- Versión de PHP: 8.3.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `empresa`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `redes_sociales`
--

CREATE TABLE `redes_sociales` (
  `id` int NOT NULL,
  `nombre_red_social` varchar(50) NOT NULL,
  `url_red_social` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `telefono`
--

CREATE TABLE `telefono` (
  `id` int NOT NULL,
  `tipo_telefono` varchar(20) NOT NULL,
  `numero_telefono` varchar(20) NOT NULL,
  `usuario_id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `id` int NOT NULL,
  `primer_nombre` varchar(50) NOT NULL,
  `primer_apellido` varchar(50) NOT NULL,
  `fecha_nacimiento` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`id`, `primer_nombre`, `primer_apellido`, `fecha_nacimiento`) VALUES
(1, 'Mauricio', 'Rivero', '1984-01-02'),
(2, 'Ana', 'García', '1990-05-15'),
(3, 'Carlos', 'López', '1985-08-20'),
(4, 'María', 'Rodríguez', '1992-03-10'),
(5, 'Juan', 'Martínez', '1988-11-25'),
(6, 'Laura', 'Hernández', '1995-07-05'),
(7, 'Pedro', 'González', '1982-09-12'),
(8, 'Sofía', 'Pérez', '1998-01-30'),
(9, 'Diego', 'Sánchez', '1987-04-18'),
(10, 'Valentina', 'Ramírez', '1993-12-08'),
(11, 'Javier', 'Torres', '1980-06-22'),
(12, 'Isabella', 'Flores', '1996-02-14'),
(13, 'Andrés', 'Díaz', '1989-10-03'),
(14, 'Camila', 'Vargas', '1994-08-28'),
(15, 'Gabriel', 'Rojas', '1983-05-07'),
(16, 'Daniela', 'Mendoza', '1991-11-19'),
(17, 'Alejandro', 'Cruz', '1986-03-25'),
(18, 'Lucía', 'Morales', '1997-09-09'),
(19, 'Mateo', 'Ortiz', '1981-12-31'),
(20, 'Mariana', 'Gutiérrez', '1999-06-15'),
(21, 'Santiago', 'Castillo', '1984-02-28'),
(22, 'Victoria', 'Reyes', '1990-10-10'),
(23, 'Nicolás', 'Jiménez', '1985-07-20'),
(24, 'Fernanda', 'Ruiz', '1993-04-05'),
(25, 'Emilio', 'Alvarez', '1988-01-12'),
(26, 'Catalina', 'Romero', '1996-08-22'),
(27, 'Julián', 'Vásquez', '1982-11-01'),
(28, 'Antonia', 'Castro', '1995-05-18'),
(29, 'Samuel', 'Gómez', '1989-03-30'),
(30, 'Elena', 'Fernández', '1994-12-12'),
(31, 'Tomás', 'Moreno', '1983-09-05'),
(32, 'Martina', 'Herrera', '1991-06-25'),
(33, 'Lucas', 'Medina', '1987-02-08'),
(34, 'Paula', 'Aguilar', '1998-10-20'),
(35, 'Joaquín', 'Suárez', '1980-04-15'),
(36, 'Valeria', 'Benítez', '1992-07-30'),
(37, 'Felipe', 'Salazar', '1986-11-08'),
(38, 'Gabriela', 'Pardo', '1997-01-22'),
(39, 'Simón', 'Cabrera', '1981-08-14'),
(40, 'Sara', 'Delgado', '1999-03-05'),
(41, 'Manuel', 'Peña', '1985-05-28');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `redes_sociales`
--
ALTER TABLE `redes_sociales`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `nombre_red_social` (`nombre_red_social`);

--
-- Indices de la tabla `telefono`
--
ALTER TABLE `telefono`
  ADD PRIMARY KEY (`id`),
  ADD KEY `usuario_id` (`usuario_id`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `redes_sociales`
--
ALTER TABLE `redes_sociales`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `telefono`
--
ALTER TABLE `telefono`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=42;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `telefono`
--
ALTER TABLE `telefono`
  ADD CONSTRAINT `telefono_ibfk_1` FOREIGN KEY (`usuario_id`) REFERENCES `usuario` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
