const path = require("path")
require("sharp")

module.exports = {
	webpack: (config, { dev, isServer }) => {
		config.module.rules.push({
			test: /\.svg$/,
			use: [
				{
					loader: "@svgr/webpack",
					options: {
						svgoConfig: {
							plugins: {
								removeViewBox: false,
							},
						},
					},
				},
			],
		})
		config.resolve.alias["images"] = path.join(__dirname, "public", "images")

		// Replace React with Preact only in client production build
		if (!dev && !isServer) {
			Object.assign(config.resolve.alias, {
				react: "preact/compat",
				"react-dom/test-utils": "preact/test-utils",
				"react-dom": "preact/compat",
			})
		}

		return config
	},
	images: {
		domains: ["images.ctfassets.net"],
	},
}
