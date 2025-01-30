import { useEffect, useState } from "react";
import { useRouter } from "expo-router";
import { Slot } from "expo-router";

export default function RootLayout() {
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted) {
      router.replace("/(tabs)/homeScreen");
    }
  }, [isMounted, router]);

  return <Slot />;
}