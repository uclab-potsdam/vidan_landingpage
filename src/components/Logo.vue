<template>
<svg width="235px" height="286px" viewBox="0 0 240 290" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <g id="logo" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g transform="translate(-122, -106)">
            <g transform="translate(122, 107)">
                <g transform="translate(3, 0)" stroke="#000000">
                    <polygon fill="#5484FF" points="0 23.1823185 80 0 80 79.8176815 0 103"></polygon>
                    <polygon fill="#737DE1" points="40 34.2679254 85 21 85 66.7320746 40 80"></polygon>
                    <polygon fill="#9B75BD" points="52 63.2679254 97 50 97 95.7320746 52 109"></polygon>
                    <polygon fill="#B86FA2" points="89 43.1128018 134 30 134 109.887198 89 123"></polygon>
                    <polygon fill="#D76884" points="112 64.7601556 157 51 157 131.239844 112 145"></polygon>
                    <polygon fill="#F2626C" points="155 65.7370797 179 59 179 139.26292 155 146"></polygon>
                    <polygon fill="#FF6060" points="149 90.1823185 229 67 229 146.817682 149 170"></polygon>
                    <line x1="0" y1="23" x2="149" y2="92"></line>
                    <line x1="0" y1="103" x2="149" y2="171"></line>
                    <line x1="80" y1="0" x2="229" y2="68"></line>
                </g>
                <text id="VIDAN" font-family="Piazzolla" font-size="70" :font-weight="`${scroll}`" fill="#000000">
                    <tspan x="0" y="250">VIDAN</tspan>
                </text>
            </g>
        </g>
    </g>
</svg>
</template>

<script>

export default {
  name: 'Logo',
  props: {
    scroll
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
text {
 font-variation-settings: 'wght'  var(--text-axis);
}
</style>
