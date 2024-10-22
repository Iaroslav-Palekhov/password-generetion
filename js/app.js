function generatePassword() {
            const length = document.getElementById('length').value;
            const includeUppercase = document.getElementById('uppercase').checked;
            const includeLowercase = document.getElementById('lowercase').checked;
            const includeNumbers = document.getElementById('numbers').checked;
            const includeSpecial = document.getElementById('special').checked;

            let charset = '';
            if (includeUppercase) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
            if (includeLowercase) charset += 'abcdefghijklmnopqrstuvwxyz';
            if (includeNumbers) charset += '0123456789';
            if (includeSpecial) charset += '!@#$%^&*()_+[]{}|;:,.<>?';

            if (charset.length === 0) {
                alert('Пожалуйста, выберите хотя бы один тип символов.');
                return;
            }

            let password = '';
            for (let i = 0; i < length; i++) {
                const randomIndex = Math.floor(Math.random() * charset.length);
                password += charset[randomIndex];
            }

            document.getElementById('password').value = password;
        }

        function copyPassword() {
            const passwordField = document.getElementById('password');
            passwordField.select();
            document.execCommand('copy');
            alert('Пароль скопирован в буфер обмена!');
        }
