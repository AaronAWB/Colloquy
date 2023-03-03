from flask import Blueprint  

static_bp = Blueprint('static', __name__, static_folder='../../../client/dist')

@static_bp.route('/', defaults={'path': ''})
@static_bp.route('/<string:path>')
def serve_index(path):
    try:
        return static_bp.send_static_file(path)
    except:
        return static_bp.send_static_file('index.html')
