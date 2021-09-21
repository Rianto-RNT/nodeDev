while (isSystemActive()) {
  const event = waitForNextEvent();
  const callback = event.getCallback();
  callback(event.data);
}
