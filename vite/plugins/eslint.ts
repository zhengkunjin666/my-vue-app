import eslintPlugin from 'vite-plugin-eslint'

//eslint校验
export default function createEslint() {
    return eslintPlugin({
		include: ['src/**/*.js', 'src/**/*.ts', 'src/**/*.vue', 'src/*.js', 'src/*.ts', 'src/*.vue'] 
	})
}
