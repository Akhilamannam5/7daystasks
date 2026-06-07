export const safeRequest = async (promise) => {
  try {
    const res = await promise;

    if (!res) {
      throw new Error("Empty response");
    }

    return res;
  } catch (err) {
    console.error("API ERROR:", err);

    return {
      success: false,
      message: "Something went wrong",
    };
  }
};