<script>
    function abrirWhatsApp() {
        // Número de telefone no formato internacional (sem o +)
        const telefone = '5511965037626'; // Substitua pelo número real
        // Mensagem personalizada que aparece ao abrir o WhatsApp
        const mensagem = 'Olá, gostaria de mais informações!';
        // Abrindo o WhatsApp com o número e a mensagem
        const url = `https://api.whatsapp.com/send?phone=${telefone}&text=${encodeURIComponent(mensagem)}`;
        window.open(url, '_blank');
    }
</script>
