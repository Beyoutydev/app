import { errorHanddlerService } from 'src/services/ErrorHandlerService';

export const asyncFunctionHandler = async (
  asyncFunction: () => Promise<any>,
) => {
  try {
    return await asyncFunction();
  } catch(err) {
    const parsedError = errorHanddlerService.handdleError(err as any);
    throw Error(parsedError);
  }
}
