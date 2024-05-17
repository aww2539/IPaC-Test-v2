from flask import request, jsonify
from flask_restful import Resource
from database.connect import connect_to_db
from models import Feature


class FeatureList(Resource):
    def get(self):
        with connect_to_db() as db_conn:
            with db_conn.cursor() as cursor:
                category_sid = request.args.get('category_sid')
                search = request.args.get('search')

                if category_sid:
                    sql = ("SELECT * "
                           "FROM features f "
                           f"WHERE f.category_sid = {category_sid} "
                           "AND f.is_deleted = false "
                           "ORDER BY f.display_name ASC")
                    cursor.execute(sql)
                    results = cursor.fetchall()
                    cursor.close()

                    features = [Feature(*row) for row in results]
                    return jsonify([feature.__dict__ for feature in features])

                if search:
                    search_text = request.args.get('search_text')

                    sql = ("SELECT * "
                           "FROM features f "
                           "WHERE f.is_deleted = false "
                           f"AND f.display_name ilike '%{search_text}%' "
                           "OR exists (SELECT * "
                           "FROM unnest(f.ep_keywords) as ep_keywords "
                           f"WHERE ep_keywords ilike '%{search_text}%') "
                           "ORDER BY f.display_name ASC")
                    print(sql)
                    
                    cursor.execute(sql)
                    results = cursor.fetchall()
                    cursor.close()

                    features = [Feature(*row) for row in results]
                    return jsonify([feature.__dict__ for feature in features])
                

                # Default
                sql = ("SELECT * "
                        "FROM features f "
                        "WHERE f.is_deleted = false "
                        "ORDER BY f.display_name ASC")
                cursor.execute(sql)
                results = cursor.fetchall()
                cursor.close()

                features = [Feature(*row) for row in results]
                return jsonify([feature.__dict__ for feature in features])