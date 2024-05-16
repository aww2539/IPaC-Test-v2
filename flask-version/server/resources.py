from api import CategoryList, FeatureList
from flask_restful import Api

def create_resources(app):
    api = Api(app, prefix="/api")

    api.add_resource(CategoryList, "/categories", endpoint='categories')
    api.add_resource(FeatureList, "/features", endpoint='features')