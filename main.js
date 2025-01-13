/**
 * Super serious left padding library.
 * Authored by: A schizophrenic
 * license: MIT 
 */

let ai;

/**
 * @param {string} str
 * @param {number} padding
 * @param {string} char
 *
 * @return {string} Padded string (Maybe)
 */
async function leftPadAi(str, padding, char=" ") {
	if (!ai) {
		try {
			ai = await window.ai.languageModel.create()
	
		} catch {
			throw new Error(
				"To use this amazing function make sure that:\n" +
				"1. You're on Chrome >128\n" +
				"2. chrome://flags/#optimization-guide-on-device-model is set to \"Enabled BypassPerfRequirement\"\n" +
				"3. chrome://flags/#prompt-api-for-gemini-nano is set to \"Enabled\"\n" +
				"4. \"Optimization Guide On Device Model\" in chrome://components/ has been fully downloaded"
			);
		}
	}

	const prompt = "create a JavaScript function with the following signature leftPad(str, padding, char) that adds padding to the left side of the string until the whole string's length reaches padding using the provided char. Return only the function implementation, without any clarifying text.";

	try {
		const code = await ai.prompt(prompt);
	
		const codeClean = code.replaceAll("```", "").replaceAll("javascript", "").replaceAll("\\n", "");
	
		// Eval... my beloved 
		const fn = new Function(codeClean + "return leftPad;");

		return fn.call({}).call({}, str, padding, char);
	} catch (e) {
		throw new Error("Unlucky, try again", e.message);
	}
}

export default leftPadAi;

