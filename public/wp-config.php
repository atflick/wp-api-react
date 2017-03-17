<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_CHARSET', 'utf8');
define('DB_COLLATE', '');

$environments = array(
	'development' => 'wp.dev',
     'staging' => 'skeleton.nclud.com',
     'production' => 'skeleton.nclud.com',
);

include 'wp-config.environments.php';


/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'RX,R|D=<c^?UocUD2^|{(Zd+348TPiR`oCvu^Xb2TO?.F}QwS]0x)x6Y[f)m>OxJ');
define('SECURE_AUTH_KEY',  'Jwqi/rv;I#RQXyN]Ras#4m(U=#K#sLA@1l7i^-5gmHEk&[GH~U{ km9#KREe RaH');
define('LOGGED_IN_KEY',    '/Z=/yc_wmDdX!w6^qX7M EFWfE3sAN3uaij]`Av>NO9v@2IllB;Nsa0HLFPwwR4a');
define('NONCE_KEY',        'Hb;l:[PpRiKLG`(MC:aM,i90(,css<B=Me6*mo%mFEbMuk/t}70Z}A@lNE^bb=i_');
define('AUTH_SALT',        'Qb~rD_sK-A_0*XG/xEQLl=kLSb is GcTiW1id_)$7fF%:TuSw,_k*:^n!1zZ|oe');
define('SECURE_AUTH_SALT', '+yoT=e<rV-KSEV{U0@9h$7h!;NaE)*eNGv;y$Cqi; ~[Sh#CHg|bOoK4C Idy?y]');
define('LOGGED_IN_SALT',   ',PpGDV5=ZzdW`}t0vjmMCO$d8/#,&?rv>Gpf-2a s!Q~%CF]BKmK=F3~XbEy^S!7');
define('NONCE_SALT',       'x 6j[j/p B[{@Sj] 9bJp&o[1gB.J7Q]8kU.!CiJBYiY>Hi/yX+|<hjU,N71|[&l');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', true);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
