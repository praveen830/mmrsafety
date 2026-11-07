import re

def check_html(path):
    with open(path, encoding='utf-8') as f:
        html = f.read()
    sub_chunk = re.search(r'id="sub-services".*?</section>', html, re.DOTALL)
    if not sub_chunk:
        print('Not found in', path)
        return
    imgs = re.findall(r'<img[^>]+src="([^"]+)"[^>]+alt="([^"]+)"', sub_chunk.group(0))
    print(f'=== {path} ===')
    for src, alt in imgs:
        print(f'  {alt} -> {src}')

check_html('dist/services/safety-nets/index.html')
check_html('dist/services/sports-nets/index.html')

