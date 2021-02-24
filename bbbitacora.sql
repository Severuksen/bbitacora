-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Versión del servidor:         10.5.8-MariaDB - mariadb.org binary distribution
-- SO del servidor:              Win32
-- HeidiSQL Versión:             11.2.0.6213
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Volcando estructura de base de datos para bitacora
CREATE DATABASE IF NOT EXISTS `bitacora` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_spanish_ci */;
USE `bitacora`;

-- Volcando estructura para tabla bitacora.gruas
CREATE TABLE IF NOT EXISTS `gruas` (
  `id_grua` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `tipo_grua` varchar(13) COLLATE utf8mb4_unicode_ci NOT NULL,
  `fab_grua` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `mod_grua` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `img` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id_grua`)
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Volcando datos para la tabla bitacora.gruas: ~9 rows (aproximadamente)
DELETE FROM `gruas`;
/*!40000 ALTER TABLE `gruas` DISABLE KEYS */;
INSERT INTO `gruas` (`id_grua`, `tipo_grua`, `fab_grua`, `mod_grua`, `img`, `created_at`, `updated_at`) VALUES
	(18, 'Forklift', 'Heli', 'Heli B700', '/upload/18-HeliB700.jpg', '2021-01-12 17:23:37', '2021-01-22 16:23:09'),
	(19, 'Forklift', 'Heli', 'Heli B900', '/upload/19-HeliB900.jpg', '2021-01-12 17:23:50', '2021-01-22 15:35:52'),
	(20, 'Reach Stacker', 'Kalmar', 'Kalmar B220', '/upload/20-KalmarB220.jpg', '2021-01-12 17:24:09', '2021-01-22 15:36:57'),
	(21, 'Reach Stacker', 'Kalmar', 'Kalmar B222', '/upload/21-KalmarB222.jpg', '2021-01-12 17:24:21', '2021-01-22 16:40:59'),
	(22, 'Reach Stacker', 'Kalmar', 'Kalmar B223', '/upload/22-KalmarB223.png', '2021-01-12 17:24:31', '2021-01-15 20:46:55'),
	(23, 'Forklift', 'Ferrari', 'Ferrari F521S', '/upload/23-FerrariF521S.jpg', '2021-01-12 20:08:31', '2021-01-15 20:50:07'),
	(24, 'Reach Stacker', 'Kalmar', 'Kalmar B221', '/upload/24-KalmarB221.png', '2021-01-12 21:01:29', '2021-01-15 20:47:09'),
	(33, 'Forklift', 'Helican', 'Helican B455', '/upload/33-HelicanB455.jpg', '2021-01-21 16:02:55', '2021-01-21 16:02:56');
/*!40000 ALTER TABLE `gruas` ENABLE KEYS */;

-- Volcando estructura para tabla bitacora.mantenimiento
CREATE TABLE IF NOT EXISTS `mantenimiento` (
  `id_man` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `tipo_man` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id_man`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Volcando datos para la tabla bitacora.mantenimiento: ~5 rows (aproximadamente)
DELETE FROM `mantenimiento`;
/*!40000 ALTER TABLE `mantenimiento` DISABLE KEYS */;
INSERT INTO `mantenimiento` (`id_man`, `tipo_man`, `created_at`, `updated_at`) VALUES
	(1, 'Mantenimiento del motor', '2021-01-28 13:48:56', '2021-01-28 13:48:56'),
	(2, 'Mantenimiento hidraulico', '2021-01-28 13:48:56', '2021-01-28 13:48:56'),
	(3, 'Mantenimiento de neumaticos', '2021-01-28 13:48:56', '2021-01-28 13:48:56'),
	(4, 'Cambio de piezas', '2021-01-28 13:48:56', '2021-01-28 13:48:56'),
	(5, 'Cambio de aceite', '2021-01-28 13:48:56', '2021-01-28 13:48:56');
/*!40000 ALTER TABLE `mantenimiento` ENABLE KEYS */;

-- Volcando estructura para tabla bitacora.manuales
CREATE TABLE IF NOT EXISTS `manuales` (
  `id_man` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `id_grua` bigint(20) unsigned NOT NULL,
  `nombre` varchar(47) COLLATE utf8mb4_unicode_ci NOT NULL,
  `descripcion` varchar(222) COLLATE utf8mb4_unicode_ci NOT NULL,
  `enlace` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id_man`),
  KEY `manuales_id_grua_foreign` (`id_grua`),
  CONSTRAINT `manuales_id_grua_foreign` FOREIGN KEY (`id_grua`) REFERENCES `gruas` (`id_grua`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Volcando datos para la tabla bitacora.manuales: ~3 rows (aproximadamente)
DELETE FROM `manuales`;
/*!40000 ALTER TABLE `manuales` DISABLE KEYS */;
INSERT INTO `manuales` (`id_man`, `id_grua`, `nombre`, `descripcion`, `enlace`, `created_at`, `updated_at`) VALUES
	(6, 18, 'Manual de procedimiento para grúas Kalmar', 'Descripción improvisada para lograr el relleno del espacio con párrafos que realmente no tienen un significado lingüístico sino mas bien, la ocupación del espacio.', '/pdf/18-ManualdeprocedimientoparagrúasKalmar.pdf', '2021-01-14 11:37:19', '2021-01-15 13:25:36'),
	(10, 18, 'Manual de introduccion', 'Introduccion basica de las maquinarias Heli...', '/pdf/18-Manualdeintro.pdf', '2021-01-14 19:13:08', '2021-01-14 20:52:58'),
	(15, 33, 'Manual de ejemplo', 'Manual de ejemplo', '/pdf/33-Manualdeejemplo.pdf', '2021-01-22 13:44:34', '2021-01-22 13:44:34');
/*!40000 ALTER TABLE `manuales` ENABLE KEYS */;

-- Volcando estructura para tabla bitacora.migrations
CREATE TABLE IF NOT EXISTS `migrations` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Volcando datos para la tabla bitacora.migrations: ~4 rows (aproximadamente)
DELETE FROM `migrations`;
/*!40000 ALTER TABLE `migrations` DISABLE KEYS */;
INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
	(1, '2021_01_07_145958_create_gruas_table', 1),
	(2, '2021_01_07_150122_create_mantenimiento_table', 1),
	(3, '2021_01_07_150143_create_servicios_table', 1),
	(4, '2021_01_11_202005_create_manuales_table', 1);
/*!40000 ALTER TABLE `migrations` ENABLE KEYS */;

-- Volcando estructura para tabla bitacora.servicios
CREATE TABLE IF NOT EXISTS `servicios` (
  `id_srv` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `id_grua` bigint(20) unsigned NOT NULL,
  `id_man` bigint(20) unsigned NOT NULL,
  `observaciones` varchar(200) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `fecha` date NOT NULL,
  `horas` int(10) unsigned NOT NULL DEFAULT 0,
  `estado` varchar(8) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'ACTIVO',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id_srv`),
  KEY `servicios_id_grua_foreign` (`id_grua`),
  KEY `servicios_id_man_foreign` (`id_man`),
  CONSTRAINT `servicios_id_grua_foreign` FOREIGN KEY (`id_grua`) REFERENCES `gruas` (`id_grua`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `servicios_id_man_foreign` FOREIGN KEY (`id_man`) REFERENCES `mantenimiento` (`id_man`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Volcando datos para la tabla bitacora.servicios: ~13 rows (aproximadamente)
DELETE FROM `servicios`;
/*!40000 ALTER TABLE `servicios` DISABLE KEYS */;
INSERT INTO `servicios` (`id_srv`, `id_grua`, `id_man`, `observaciones`, `fecha`, `horas`, `estado`, `created_at`, `updated_at`) VALUES
	(6, 24, 1, 'Engrasamiento de las partes del motor', '2021-01-13', 150, 'ACTIVO', '2021-01-13 13:47:07', '2021-01-13 18:11:42'),
	(8, 18, 1, 'Ninguna de las anteriores', '2021-01-07', 100, 'ACTIVO', '2021-01-13 18:13:50', '2021-01-13 18:13:50'),
	(9, 19, 1, 'Motor dañado', '2020-11-06', 10, 'INACTIVO', '2021-01-13 18:14:12', '2021-01-22 20:02:48'),
	(10, 24, 5, 'Problemas con el aceite', '2021-01-20', 5, 'ACTIVO', '2021-01-13 18:14:27', '2021-01-13 18:14:27'),
	(14, 23, 4, 'Cambio de tuercas', '2021-01-12', 10, 'ACTIVO', '2021-01-13 18:53:19', '2021-01-13 18:53:19'),
	(15, 23, 4, 'Cambio de tuercas', '2021-01-07', 10, 'ACTIVO', '2021-01-13 19:03:34', '2021-01-13 20:35:25'),
	(17, 23, 4, 'Nada', '2021-01-07', 20, 'ACTIVO', '2021-01-13 21:11:04', '2021-01-13 21:11:04'),
	(21, 18, 1, 'Prueba 1', '2021-01-04', 10, 'ACTIVO', '2021-01-15 18:20:56', '2021-01-15 18:20:56'),
	(22, 18, 2, 'Reparado', '2021-01-11', 12, 'ACTIVO', '2021-01-15 18:21:10', '2021-01-15 18:21:10'),
	(23, 22, 2, 'Cambio de hidrogeno', '2021-01-02', 20, 'ACTIVO', '2021-01-22 13:14:23', '2021-01-22 13:14:23'),
	(24, 33, 1, 'Todo bien.', '2021-01-03', 10, 'ACTIVO', '2021-01-22 13:40:47', '2021-01-22 13:40:47'),
	(25, 24, 2, 'Hidrogeno colocado', '2021-01-04', 20, 'ACTIVO', '2021-01-22 13:41:07', '2021-01-22 13:41:07'),
	(26, 21, 3, 'A rebajar Nacary', '2021-01-22', 20, 'ACTIVO', '2021-01-22 16:27:28', '2021-01-22 16:28:02');
/*!40000 ALTER TABLE `servicios` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
