import streamlit as st

# Load HTML
with open("index.html", "r", encoding="utf-8") as f:
    html_code = f.read()

# Load CSS
with open("style.css", "r", encoding="utf-8") as f:
    css_code = f"<style>{f.read()}</style>"

# Load JS
with open("script.js", "r", encoding="utf-8") as f:
    js_code = f"<script>{f.read()}</script>"

final_html = css_code + html_code + js_code

st.components.v1.html(final_html, height=900, scrolling=True)
