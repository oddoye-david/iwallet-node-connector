const listPayOptions =
  (axios, defaultOptions) =>
    /**
     * Retrieves a list of all possible payment options on Slydepay
     *
     * @returns {array}
     */
    async () => {
      try {
        const { data } = await axios.post(
          'invoice/payoptions',
          {
            emailOrMobileNumber: defaultOptions.emailOrMobileNumber,
            merchantKey: defaultOptions.merchantKey,
          });
        return data;
      } catch (listPayOptionsError) {
        throw Error(listPayOptionsError);
      }
    };

export default listPayOptions;
