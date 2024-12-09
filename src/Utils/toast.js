import { toast } from 'react-hot-toast';

const showToast = (type, message) => {
    switch (type) {
        case 'success':
            toast.success(message, {
                style: {
                    border: '1px solid #4caf50',
                    padding: '16px',
                    color: '#4caf50',
                    background: '#FFFFF'
                },
                icon: '✅',
            });
            break;
        case 'error':
            toast.error(message, {
                style: {
                    border: '1px solid #f44336',
                    padding: '16px',
                    color: '#f44336',
                    background: '#FFFFF'

                },
                icon: '❌',
            });
            break;
        case 'warning':
            toast(message, {
                style: {
                    border: '1px solid #ff9800',
                    padding: '16px',
                    color: '#ff9800',
                    background: '#FFFFF'

                },
                icon: '⚠️',
            });
            break;
        case 'info':
            toast(message, {
                style: {
                    border: '1px solid #2196f3',
                    padding: '16px',
                    background: '#FFFFF',
                    color: '#2196f3',
                },
                icon: 'ℹ️',
            });
            break;
        default:
            toast(message, {
                style: {
                    border: '1px solid #363636',
                    padding: '16px',
                    color: '#fff',
                    background: '#FFFFF'
                },
                icon: '🔔',
            });
            break;
    }
};

export default showToast;
