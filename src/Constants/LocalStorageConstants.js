export const LocalStorageMessages = {
  success: {
    CHECK_IN: 'You have successfully checked in for today. Let’s get to work!',
    CHECK_OUT:
      'You have successfully checked out. Have a great rest of the day!',
    GENERAL: 'Operation completed successfully!',
  },
  error: {
    CHECK_IN_ALREADY_COMPLETED:
      'You have already completed your login for today. No need to check in again.',
    CHECK_OUT_ALREADY_DONE: 'You have already checked out for the day.',
    CANT_STORE_IN_STORAGE:
      'Unable to save data to your device storage. Please try again later.',
    ERROR_FETCHING_DATA:
      'An error occurred while fetching stored data. Please check your connection or try again later.',
    ERROR_CLEARING_DATA:
      'There was an issue clearing your saved data. Please try again.',
    GENERIC_ERROR: 'An unexpected error occurred. Please try again later.',
    PLEASE_CHECK_IN_FIRST: 'Please complete your check-in before proceeding.',
  },
};
