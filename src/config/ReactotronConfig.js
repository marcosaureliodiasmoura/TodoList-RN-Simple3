import Reactotron from "reactotron-react-native";

// Feche o emulador e pare o servidor do node.
// Iniciem o emulador
// Rode o comando adb reverse tcp:9090 tcp:9090
// Rode o run-android novamente

if (__DEV__) {
  const tron = Reactotron.configure()
    .useReactNative()
    .connect({
      server: "10.0.3.2",
      port: 3334,
      enabled: true
    });

  tron.clear();

  console.tron = tron;
}
