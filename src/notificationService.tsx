import { getToken, getMessaging, onMessage } from 'firebase/messaging';
import { firebaseApp } from './firebaseConfig';

const messaging = getMessaging(firebaseApp);

export async function requestNotificationPermission(): Promise<void> {
  try {
    const permission = await Notification.requestPermission();
    if (permission === 'granted') {
      const token = await getToken(messaging, {
        vapidKey: "BLpbxiqAbPw7E3PcgERV_35ibTcWWZS-VN3JJbaSJTcZ8pDq85QKVW6ePKgh71h2s6Vt1wjrJAG1dwNnYWkOVhU",
      });
      console.log('FCM Token:', token);
    } else {
      console.error('Notification permission denied');
    }
  } catch (error) {
    console.error('Error requesting permission:', error);
  }
}

export function setupMessageListener(callback: (payload: any) => void): void {
  onMessage(messaging,(payload: any) => {
    console.log('Received message:', payload);
    // Handle the received message using the provided messageHandler
    if (callback) {
      callback(payload);
    }
  });
}


